import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from '@modules/uman/user/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from './dto/signup.dto';
import { generatePassword } from '@common/utils/password.util';
// import { CompanyIdentity } from "@modules/vendor/company-identity/entities/company-identity.entity";
import { VendorStatus } from '@modules/master/vendor-status/entities/vendor-status.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { Menu } from '@modules/uman/menu/entities/menu.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { RunningNumber } from '@modules/running-number/entities/running-number.entity';
import { RunningNumberService } from '@modules/running-number/running-number.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(Vendor)
        private vendorRepo: Repository<Vendor>,
        @InjectRepository(VendorStatus)
        private vendorStatusRepo: Repository<VendorStatus>,
        @InjectRepository(Role)
        private roleRepo: Repository<Role>,
        @InjectRepository(UserHasRole)
        private userHasRoleRepo: Repository<UserHasRole>,
        @InjectRepository(DocumentType)
        private documentTypeRepo: Repository<DocumentType>,
        @InjectRepository(VendorDocument)
        private vendorDocumentRepo: Repository<VendorDocument>,
        @InjectRepository(VendorCompany)
        private vendorCompanyRepo: Repository<VendorCompany>,
        @InjectRepository(Menu)
        private menuRepo: Repository<Menu>
    ) {}

    async login(username: string, password: string) {
        const user = await this.userRepo.findOne({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                username: true,
                password: true,
                type: true,
                vendor: {
                    id: true,
                    vendorCompany: {
                        companyName : true,
                    },
                    vendorStatus: {
                        name: true,
                        code: true,
                    },
                },
            },
            where: { username },
            relations: [
                'vendor',
                'vendor.vendorCompany',
                'vendor.vendorStatus',
                'userHasRoles',
                'userHasRoles.role',
            ],
        });

        if (!user) throw new UnauthorizedException('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const roles = user.userHasRoles
            .filter((uhr) => uhr.isActive)
            .map((uhr) => uhr.role);

        const defaultRole = roles[0] || null;

        const payload: JwtPayload = {
            sub: user.id,
            username: user.username,
            type: user.type,
            vendorId: user.vendor?.id || null,
            defaultRoleId: defaultRole?.id || 0,
        };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async me(payload: JwtPayload) {
        const user = await this.userRepo.findOne({
            where: { id: payload.sub },
            relations: [
                'vendor',
                'vendor.vendorCompany',
                'vendor.vendorStatus',
                'userHasRoles',
                'userHasRoles.role',
            ],
        });

        if (!user) throw new UnauthorizedException('User not found');

        const roles = user.userHasRoles
            .filter((uhr) => uhr.isActive)
            .map((uhr) => uhr.role);

        const defaultRole = roles.find((r) => r.id === payload.defaultRoleId) || roles[0];

        let permissions: string[] = [];
        let menus: Menu[] = [];

        if (defaultRole) {
            const roleWithPerms = await this.roleRepo.findOne({
                where: { id: defaultRole.id },
                relations: ['permissions', 'permissions.menus'],
            });

            if (roleWithPerms) {
                permissions = roleWithPerms.permissions.map((p) => p.name);
                
                // Extract unique menus
                const uniqueMenusMap = new Map<number, Menu>();
                roleWithPerms.permissions.forEach(p => {
                    if (p.menus) {
                        p.menus.forEach(m => {
                            if (!uniqueMenusMap.has(m.id)) {
                                uniqueMenusMap.set(m.id, m);
                            }
                        });
                    }
                });

                const allMenus = Array.from(uniqueMenusMap.values()).map(m => ({
                    id: m.id,
                    name: m.name,
                    path: m.path,
                    icon: m.icon,
                    parentId: m.parentId,
                    order: m.order,
                })).sort((a, b) => a.order - b.order);
                
                // Build tree
                const menuMap = new Map<number, any>();
                allMenus.forEach(m => {
                    menuMap.set(m.id, { ...m, children: [] });
                });

                menus = [];
                menuMap.forEach(m => {
                    if (m.parentId) {
                        const parent = menuMap.get(m.parentId);
                        if (parent) {
                            parent.children.push(m);
                        } else {
                            menus.push(m);
                        }
                    } else {
                        menus.push(m);
                    }
                });
            }
        }

        const formattedVendor = user.type === 'EXTERNAL' && user.vendor ? {
            id: user.vendor.id,
            vendorCode: user.vendor.vendorCode || null,
            companyName: user.vendor.vendorCompany?.companyName || null,
            vendorStatus: user.vendor.vendorStatus?.name || null,
        } : null;

        const formattedUser = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            type: user.type,
            vendor: formattedVendor,
        };

        const formattedRoles = roles.map(r => ({
            id: r.id,
            code: r.code,
            name: r.name,
        }));

        const formattedDefaultRole = defaultRole ? {
            code: defaultRole.code,
            name: defaultRole.name,
        } : null;

        return {
            user: formattedUser,
            defaultRole: formattedDefaultRole,
            roles: formattedRoles,
            permissions,
            menus,
        };
    }

    async signup(params: SignUpDto) {
        const { vendorName, email, npwp } = params;
        const checkUser = await this.userRepo.findOne({
            where: { email },
        });

        const checkVendor = await this.vendorRepo.findOne({
            where: {
                vendorCompany: {
                    companyName: vendorName,
                },
                vendorDocument: {
                    documentNumber: npwp,
                    documentType: {
                        code: 'NPWP'
                    } 
                }
            }
        });

        if (checkUser || checkVendor) throw new UnauthorizedException("User already exists");

        const vendorStatus = await this.vendorStatusRepo.findOne({
            where: {
                code: 'PRE_REGISTRATION',
            },
        });

        const documentType = await this.documentTypeRepo.findOne({
            where: {
                code: 'NPWP',
            },
        });

        const role = await this.roleRepo.findOne({
            where: {
                code: 'VENDOR',
            },
        });

        if (!vendorStatus || !role || !documentType)
            throw new UnauthorizedException(
                'Master Vendor Status or Role or Document Type is not found',
            );

        const password = generatePassword();
        const hashPassword = await bcrypt.hash(password, 10);

        const now = new Date();
        const threeYearsLater = new Date(now);
        threeYearsLater.setFullYear(now.getFullYear() + 10);

        const vendor = await this.vendorRepo.save(this.vendorRepo.create({
            // vendorCode: null,
            vendorStage: 'CANDIDATE',
            vendorStatus: vendorStatus
        }));

        const vendorDocument = await this.vendorDocumentRepo.save(this.vendorDocumentRepo.create({
            vendor: vendor,
            documentType: documentType,
            documentNumber: npwp
        }));

        const vendorCompany = await this.vendorCompanyRepo.save(this.vendorCompanyRepo.create({
            vendor: vendor,
            companyName: vendorName
        }));



        const user = await this.userRepo.save(
            this.userRepo.create({
                email,
                firstname: vendorName,
                lastname: vendorName,
                password: hashPassword,
                username: email,
                type: 'EXTERNAL',
                isActive: true,
                effectiveStartDate: now,
                effectiveEndDate: threeYearsLater,
                vendor : vendor
            }),
        );

        const userHasRole = await this.userHasRoleRepo.save(
            this.userHasRoleRepo.create({
                user: user,
                role: role,
                isActive: true,
                effectiveStartDate: now,
                effectiveEndDate: threeYearsLater,
            }),
        );

        return {
            username: user.username,
            password,
        };
    }
}

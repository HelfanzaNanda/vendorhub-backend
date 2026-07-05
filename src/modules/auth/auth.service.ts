import { RequestContext } from '@common/context/request-context';
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
        private vendorCompanyRepo: Repository<VendorCompany>
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
                    vendorStatus: {
                        name: true,
                        code: true,
                    },
                },
            },
            where: { username },
            relations: [
                'vendor',
                'vendor.vendorStatus',
                'userHasRoles',
                'userHasRoles.role',
                'userHasRoles.role.permissions',
            ],
        });

        if (!user) throw new UnauthorizedException('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const permissions = user.userHasRoles
            .filter((uhr) => uhr.isActive) // optional filter aktif
            .flatMap((uhr) => uhr.role.permissions)
            .map((p) => p.name);

        const roles = user.userHasRoles
            .filter((uhr) => uhr.isActive)
            .map((uhr) => uhr.role.name);

        const defaultRole = roles[0] || null;

        const { password: _, ...userWithoutPassword } = user;

        const payload: RequestContext = {
            user: userWithoutPassword,
            permissions: [...new Set(permissions)],
            roles,
            defaultRole,
        };

        return {
            accessToken: this.jwtService.sign(payload),
            // payload : payload
        };
    }

    me(user: RequestContext) {
        return user;
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

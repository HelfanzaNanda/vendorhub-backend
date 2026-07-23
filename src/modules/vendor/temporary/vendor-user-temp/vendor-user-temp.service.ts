import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorUserTempDto } from './dto/create-vendor-user-temp.dto';
import { UpdateVendorUserTempDto } from './dto/update-vendor-user-temp.dto';
import { In, Repository } from 'typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORUSERTEMP_FIELDS } from './query/vendor-user-temp-field.meta';
import { VendorUserTempMapper } from './mapper/vendor-user-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Area } from '@modules/master/area/entities/area.entity';

@Injectable()
export class VendorUserTempService extends BaseDraftCrudService<User, VendorUserTemp> {
    constructor(
        @InjectRepository(User) masterRepo: Repository<User>,
        @InjectRepository(VendorUserTemp) tempRepo: Repository<VendorUserTemp>,
        @InjectRepository(Role) private roleRepo: Repository<Role>,
        @InjectRepository(Area) private areaRepo: Repository<Area>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorUserTemp = 'vendorUserId';

    protected mapMasterToTemp(master: User, vendorTempId: number, action: string): Partial<VendorUserTemp> {
        return {
            vendorTempId,
            vendorUserId: master.id,
            action,
            firstname: master.firstname,
            lastname: master.lastname,
            username: master.username,
            email: master.email,
            jobTitle: master.jobTitle,
            positionId: master.position?.id || (master as any).positionId,
            effectiveStartDate: master.effectiveStartDate,
            effectiveEndDate: master.effectiveEndDate,
            phone: master.phone,
            areaIds: master.areaIds,
            // Assuming we don't map userHasRoles directly, or we leave it empty.
        };
    }

    async create(vendorId: number, data: CreateVendorUserTempDto) {
        const payload = {
            ...data,
            roleIds: data.roleIds?.join(',') ?? null,
            areaIds: data.areaIds?.join(',') ?? null,
        };
        return this.createDraft(vendorId, payload as any);
    }

    async update(vendorId: number, id: number, data: UpdateVendorUserTempDto, isMaster: boolean) {
        // Exclude 'source' from data when saving
        const { source, ...updateData } = data;
        const payload = {
            ...updateData,
            roleIds: updateData.roleIds?.join(',') ?? null,
            areaIds: updateData.areaIds?.join(',') ?? null,
        };
        return this.updateDraft(vendorId, id, payload as any, isMaster);
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        return this.deleteDraft(vendorId, id, isMaster);
    }

    async pagination(vendorId: number, query: PaginationQueryDto) {
        const masterQb = this.masterRepo.createQueryBuilder('m')
            .where('m.vendor_id = :vendorId', { vendorId })
            .leftJoinAndSelect('m.position', 'position')
            .leftJoinAndSelect('m.file', 'file')
            .leftJoinAndSelect('m.userHasRoles', 'userHasRoles')
            .leftJoinAndSelect('userHasRoles.role', 'role');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorUser', 'vendorUser')
            .leftJoinAndSelect('t.position', 'position')
            .leftJoinAndSelect('t.file', 'file');

        const roles = await this.roleRepo.find();
        const roleMap = new Map(roles.map(role => [role.id, { id: role.id, name: role.name }]));

        const areas = await this.areaRepo.find();
        const areaMap = new Map(areas.map(area => [area.id, { id: area.id, name: area.name }]));

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorUserId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            let resolvedRoles = [];
            if (entity.userHasRoles && source === 'MASTER') {
                resolvedRoles = entity.userHasRoles.map((u: any) => u.role.name);
            } else if (entity.roleIds && source === 'TEMP') {
                const roleIds = entity.roleIds.split(',').map((id: string) => Number(id));
                resolvedRoles = roleIds.map((rid: number) => roleMap.get(rid)?.name).filter(Boolean);
            }

            let resolvedAreas = [];
            if (entity.areaIds) {
                const areaIds = entity.areaIds.split(',').map((id: string) => Number(id));
                resolvedAreas = areaIds.map((aid: number) => areaMap.get(aid)?.name).filter(Boolean);
            }

            const res = source === 'TEMP' 
                ? VendorUserTempMapper.toResponse(entity) 
                : VendorUserTempMapper.toResponse({ ...entity, vendorUserId: entity.id } as any);
            return {
                ...res,
                roles: resolvedRoles,
                areas: resolvedAreas,
                id,
                masterId,
                tempId,
                source,
                action: source === 'MASTER' ? null : action
            };
        };

        return this.getMergedPagination(
            vendorId, 
            query, 
            masterQb, 
            tempQb, 
            mapToResponse
        );
    }

    async findOne(vendorId: number, id: number, isMaster: boolean) {
        if (isMaster) {
            const item = await this.masterRepo.findOne({
                where: { id, vendor: { id: vendorId } } as any,
                relations: {
                    position : true,
                    userHasRoles : {
                        role : true
                    },
                    file : true
                }
            });
            if (!item) throw new NotFoundException();
            const res = VendorUserTempMapper.toResponse({ ...item, vendorUserId: item.id } as any);
            let roles: Role[] = [];
            if (item.userHasRoles && item.userHasRoles.length > 0) {
                const ids = item.userHasRoles.map(u => u.role.id);
                if (ids.length > 0) {
                    roles = await this.roleRepo.find({
                        where: { id: In(ids) }
                    });
                }
            }
            res.roles = roles;
            let areas: Area[] = [];
            if (item.areaIds) {
                const ids = item.areaIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
                if (ids.length > 0) {
                    areas = await this.areaRepo.find({
                        where: { id: In(ids) }
                    });
                }
            }
            res.areas = areas;
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: {
                    position : true,
                    file : true
                }
            });
            if (!item) throw new NotFoundException();
            const res = VendorUserTempMapper.toResponse(item);
            
            const masterId = item.vendorUserId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            let roles: Role[] = [];
            if (item.roleIds) {
                const ids = item.roleIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
                if (ids.length > 0) {
                    roles = await this.roleRepo.find({
                        where: { id: In(ids) }
                    });
                }
            }
            res.roles = roles;

            let areas: Area[] = [];
            if (item.areaIds) {
                const ids = item.areaIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
                if (ids.length > 0) {
                    areas = await this.areaRepo.find({
                        where: { id: In(ids) }
                    });
                }
            }
            res.areas = areas;
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}

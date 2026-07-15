import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { WorklistUserMapper } from "./worklist-user.mapper";
import { VendorUserTemp } from "@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Area } from '@modules/master/area/entities/area.entity';
import { Role } from '@modules/uman/role/entities/role.entity';

@Injectable()
export class WorklistUserAccessService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorUserTemp)
        private readonly tempRepository: Repository<VendorUserTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        const temps = await this.tempRepository.find({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                phone: true,
                areaIds: true,
                effectiveStartDate: true,
                effectiveEndDate: true,
                position: { id: true, name: true },
                jobTitle: true,
                roleIds: true,
                vendorUser: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    phone: true,
                    areaIds: true,
                    effectiveStartDate: true,
                    effectiveEndDate: true,
                    position: { id: true, name: true },
                    jobTitle: true,
                }
            },
            where: whereClause,
            relations: {
                position: true,
                vendorUser: true,
            },
        });

        // Build query to get Area names for all Area IDs
        if (temps.length > 0) {
            const areaIds = Array.from(
                new Set(
                    temps.flatMap(t => t.areaIds?.split(',') || [])
                )
            ).map(Number);
            
            if (areaIds.length > 0) {
                const areas = await this.workflowTransactionRepository.manager.find(Area, {
                    select: { id: true, name: true },
                    where: { id: In(areaIds) },
                });
                const areaMap = new Map(areas.map(a => [a.id, a.name]));
                temps.forEach(t => {
                    t.areaNames = (t.areaIds?.split(',') || [])
                        .map(id => areaMap.get(Number(id)) || "")
                        .filter(Boolean);
                });
            }
        }

        if (temps.length > 0) {
            const roleIds = Array.from(
                new Set(
                    temps.flatMap(t => t.roleIds?.split(',') || [])
                )
            ).map(Number);
            if (roleIds.length > 0) {
                const roles = await this.workflowTransactionRepository.manager.find(Role, {
                    select: { id: true, name: true },
                    where: { id: In(roleIds) },
                });
                const roleMap = new Map(roles.map(a => [a.id, a.name]));
                temps.forEach(t => {
                    t.roleNames = (t.roleIds?.split(',') || [])
                        .map(id => roleMap.get(Number(id)) || "")
                        .filter(Boolean);
                });
            }
        }
        
        const response = WorklistUserMapper.toResponse(temps);

        if (response.length === 0 && workflow.vendorTemp?.vendorId) {
            const masterData = await this.workflowTransactionRepository.manager.find(User, {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    phone: true,
                    areaIds: true,
                    effectiveStartDate: true,
                    effectiveEndDate: true,
                    position: { id: true, name: true },
                    jobTitle: true,
                    userHasRoles: { role: { id: true, name: true } },   
                },
                where: { vendor: { id: workflow.vendorTemp.vendorId } },
                relations: {
                    position: true,
                    userHasRoles: {
                        role: true,
                    }
                }
            });

            return masterData.map(master => ({
                id: master.id,
                action: 'NO_ACTION',
                reviewStatus: null,
                reviewRemark: null,
                data: {
                    ...master,
                    vendor: undefined,
                },
                originalData: {
                    ...master,
                    vendor: undefined,
                },
                permissions: ReviewHelper.getPermissions('NO_ACTION')
            }));
        }

        return response;
        
    }
}

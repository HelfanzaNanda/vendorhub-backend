import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VendorPersonnel } from "@modules/vendor/vendor-personnel/entities/vendor-personnel.entity";
import { WorklistPersonnelMapper } from "./worklist-personnel.mapper";

@Injectable()
export class WorklistPersonnelService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorPersonnelTemp)
        private readonly tempRepository: Repository<VendorPersonnelTemp>,
    ) {}

    async get(workflowTransactionId: number, personnelType: string) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const temps = await this.tempRepository.find({
            select: {
                id: true,
                vendorPersonnel: {
                    id: true,
                    title: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    name: true,
                    jobType: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    position: true,
                    identityType: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    identityNumber: true,
                    email: true,
                    phone: true,
                },
                name: true,
                email: true,
                phone: true,
                identityNumber: true,
                position: true,
                privyId: true,
                enterpriseId: true,
                reviewNotes: true,
                reviewStatus: true,                
                personnelType: {
                    id: true,
                    code: true,
                    name: true,
                },
                title: {
                    id: true,
                    code: true,
                    name: true,
                },
                jobType: {
                    id: true,
                    code: true,
                    name: true,
                },
                identityType: {
                    id: true,
                    code: true,
                    name: true,
                },
                hasAuthorityLimitation: true,
                authorityLimitationExpiredAt: true,
                authorityLimitationNotes: true,
                authorityLimitationFile: {
                    id: true,
                    fileName: true,
                    fileSize: true,
                    mimeType: true,
                },
            },
            where: {
                vendorTempId: workflow.vendorTemp.id, 
                personnelType : {
                    code : personnelType
                }
            },
            relations: {
                vendorPersonnel: true,
                jobType: true,
                identityType: true,
                title: true,
                personnelType: true,
                authorityLimitationFile: true,
            },
        });
        
        const response = WorklistPersonnelMapper.toResponse(temps);

        if (response.length === 0 && workflow.vendorTemp?.vendorId) {
            const masterData = await this.workflowTransactionRepository.manager.find(VendorPersonnel, {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    identityNumber: true,
                    position: true,
                    privyId: true,
                    enterpriseId: true,                
                    personnelType: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    title: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    jobType: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    identityType: {
                        id: true,
                        code: true,
                        name: true,
                    },
                    hasAuthorityLimitation: true,
                    authorityLimitationExpiredAt: true,
                    authorityLimitationNotes: true,
                    authorityLimitationFile: {
                        id: true,
                        fileName: true,
                        fileSize: true,
                        mimeType: true,
                    },
                },
                where: { 
                    vendorId: workflow.vendorTemp.vendorId,
                    personnelType : {
                        code : personnelType
                    }
                },
                relations: {
                    personnelType: true,
                    title: true,
                    jobType: true,
                    identityType: true,
                    authorityLimitationFile: true,
                }
            });

            return masterData.map(master => ({
                id: master.id,
                action: 'NO_ACTION',
                reviewStatus: null,
                reviewRemark: null,
                data: {
                    ...master,
                    vendorId: undefined,
                },
                originalData: {
                    ...master,
                    vendorId: undefined,
                },
                permissions: ReviewHelper.getPermissions('NO_ACTION')
            }));    
        }

        return response;
    }
}

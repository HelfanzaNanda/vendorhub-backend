import { VendorBusinessLicenseTemp } from "@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VendorBusinessLicense } from "@modules/vendor/vendor-business-license/entities/vendor-business-license.entity";
import { WorklistBusinessLicenseMapper } from "./worklist-business-license.mapper";

@Injectable()
export class WorklistBusinessLicenseService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorBusinessLicenseTemp)
        private readonly tempRepository: Repository<VendorBusinessLicenseTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const temp = await this.tempRepository.findOne({
            where: { vendorTempId: workflow.vendorTemp.id },
            relations: ['vendorBusinessLicense'],
        });

        if (!temp) {
            if (workflow.vendorTemp?.vendorId) {
                const masterData = await this.workflowTransactionRepository.manager.findOne(VendorBusinessLicense, {
                    where: { vendorId: workflow.vendorTemp.vendorId },
                    relations: ['file']
                });
                
                if (masterData) {
                    return [{
                        id: masterData.id,
                        action: 'NO_CHANGE',
                        reviewStatus: null,
                        reviewRemark: null,
                        data: {
                            ...masterData,
                            vendorId: undefined,
                        },
                        originalData: {
                            ...masterData,
                            vendorId: undefined,
                        }
                    }];
                }
            }
            return [];
        }

        return WorklistBusinessLicenseMapper.toResponse(temp);
        
    }
}

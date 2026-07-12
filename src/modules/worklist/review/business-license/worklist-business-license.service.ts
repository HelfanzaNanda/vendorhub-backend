import { VendorBusinessLicenseTemp } from "@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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
            throw new NotFoundException(`BusinessLicense not found`);
        }

        return WorklistBusinessLicenseMapper.toResponse(temp);
        
    }
}

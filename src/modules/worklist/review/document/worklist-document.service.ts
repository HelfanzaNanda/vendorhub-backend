import { VendorDocumentTemp } from "@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistDocumentMapper } from "./worklist-document.mapper";

@Injectable()
export class WorklistDocumentService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorDocumentTemp)
        private readonly tempRepository: Repository<VendorDocumentTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const temp = await this.tempRepository.findOne({
            where: { vendorTempId: workflow.vendorTemp.id },
            relations: ['vendorDocument'],
        });

        if (!temp) {
            throw new NotFoundException(`Document not found`);
        }

        return WorklistDocumentMapper.toResponse(temp);
        
    }
}

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

    async get(workflowTransactionId: number, documentType: string) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const temp = await this.tempRepository.findOne({
            select: {
                id: true,
                documentNumber: true,
                address: true,
                taxpayerStatus: true,
                publishDate: true,
                documentType : {
                    id: true,
                    code: true,
                    name: true
                },
                file: {
                    id: true,
                    fileName: true,
                },
                reviewStatus: true,
                reviewNotes: true,
                vendorDocument: {
                    id: true,
                    documentNumber: true,
                    address: true,
                    taxpayerStatus: true,
                    publishDate: true,
                    documentType : {
                        id: true,
                        code: true,
                        name: true
                    },
                    file: {
                        id: true,
                        fileName: true,
                    },
                },
            },
            where: { 
                vendorTempId: workflow.vendorTemp.id, 
                documentType : {
                    code : documentType
                } 
            },
            relations: {
                documentType: true,
                file: true,
                vendorDocument: {
                    documentType: true,
                    file: true,
                },
            },
        });

        return WorklistDocumentMapper.toResponse(temp);
        
    }
}

import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorDocumentTemp } from "@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VendorDocument } from "@modules/vendor/vendor-document/entities/vendor-document.entity";
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

        if (!temp) {
            if (workflow.vendorTemp?.vendorId) {
                const masterData = await this.workflowTransactionRepository.manager.findOne(VendorDocument, {
                    where: { 
                        vendorId: workflow.vendorTemp.vendorId,
                        documentType: { code: documentType }
                    },
                    relations: {
                        documentType: true,
                        file: true
                    }
                });

                if (masterData) {
                    return [{
                        id: masterData.id,
                        action: 'NO_ACTION',
                        reviewStatus: null,
                        reviewRemark: null,
                        data: {
                            ...masterData,
                            vendorId: undefined,
                        },
                        originalData: {
                            ...masterData,
                            vendorId: undefined,
                        },
                permissions: ReviewHelper.getPermissions('NO_ACTION')
                    }];
                }
            }
            return [];
        }

        return WorklistDocumentMapper.toResponse(temp);
        
    }
}

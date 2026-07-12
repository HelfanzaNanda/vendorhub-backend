import { VendorBankTemp } from "@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistBankMapper } from "./worklist-bank.mapper";

@Injectable()
export class WorklistBankService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorBankTemp)
        private readonly tempRepository: Repository<VendorBankTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        
        const temps = await this.tempRepository.find({
            select: {
                bankBranch: {
                    id: true,
                    name: true,
                    code: true,
                    address: true,
                    bank: {
                        id: true,
                        name: true,
                        country: {
                            id: true,
                            name: true,
                        },
                    },
                },
                currency: {
                    id: true,
                    name: true,
                    code: true,
                },
                file: {
                    id: true,
                    fileName: true,
                    fileSize: true,
                },
                id: true,
                reviewNotes: true,
                reviewStatus: true,
                accountName : true,
                accountNumber : true,
                action: true,
            },
            where: whereClause,
            relations: {
                bankBranch : {
                    bank : {
                        country : true
                    }
                },
                currency : true,
                file : true,
            },
        });
        return WorklistBankMapper.toResponse(temps);
    }
}

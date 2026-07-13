import { VendorAffiliationTemp } from "@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistAffiliationMapper } from "./worklist-affiliation.mapper";

@Injectable()
export class WorklistAffiliationService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorAffiliationTemp)
        private readonly tempRepository: Repository<VendorAffiliationTemp>,
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
                npwp: true,
                companyName: true,
                businessField: true,
                reviewNotes: true,
                reviewStatus: true,
                vendorAffiliation: {
                    id: true,
                    npwp: true,
                    companyName: true,
                    businessField: true,
                    affiliateType: {
                        id: true,
                        name: true,
                    }
                },
                affiliateType: {
                    id: true,
                    name: true,
                },
            },
            where: whereClause,
            relations: {
                vendorAffiliation : {
                    affiliateType: true
                },
                affiliateType: true
            },
        });
        return WorklistAffiliationMapper.toResponse(temps);
        
    }
}

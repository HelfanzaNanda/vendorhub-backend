import { VendorCompetencyTemp } from "@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistCompetencyMapper } from "./worklist-competency.mapper";

@Injectable()
export class WorklistCompetencyService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorCompetencyTemp)
        private readonly tempRepository: Repository<VendorCompetencyTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        
        const temps = await this.tempRepository.find({
            where: whereClause,
            relations: ['vendorCompetency'],
        });
        return WorklistCompetencyMapper.toResponse(temps);
        
    }
}

import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistPersonnelMapper } from "./worklist-personnel.mapper";

@Injectable()
export class WorklistPersonnelService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorPersonnelTemp)
        private readonly tempRepository: Repository<VendorPersonnelTemp>,
    ) {}

    async get(workflowTransactionId: number, personnelType?: string) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        if (personnelType) {
            // Assume personnelType filtering by code/id if needed, but let's just fetch all or filter by type relation.
            // Adjust this if personnelType is a relation or string.
            // For now just pass it to whereClause if it exists.
        }
        const temps = await this.tempRepository.find({
            where: whereClause,
            relations: ['vendorPersonnel'],
        });
        return WorklistPersonnelMapper.toResponse(temps);
        
    }
}

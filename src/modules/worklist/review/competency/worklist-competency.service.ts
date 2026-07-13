import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorCompetencyTemp } from "@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VendorCompetency } from "@modules/vendor/vendor-competency/entities/vendor-competency.entity";
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
        const response = WorklistCompetencyMapper.toResponse(temps);

        if (response.length === 0 && workflow.vendorTemp?.vendorId) {
            const masterData = await this.workflowTransactionRepository.manager.find(VendorCompetency, {
                where: { vendorId: workflow.vendorTemp.vendorId },
                relations: ['customerReferences', 'subCategoryItem']
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

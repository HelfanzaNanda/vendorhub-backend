import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistUserMapper } from "./worklist-user.mapper";
import { VendorUserTemp } from "@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity";
import { User } from "@modules/uman/user/entities/user.entity";

@Injectable()
export class WorklistUserAccessService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorUserTemp)
        private readonly tempRepository: Repository<VendorUserTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        const temps = await this.tempRepository.find({
            // select: {
                
            // },
            where: whereClause,
            // relations: {
                
            // },
        });
        const response = WorklistUserMapper.toResponse(temps);

        if (response.length === 0 && workflow.vendorTemp?.vendorId) {
            const masterData = await this.workflowTransactionRepository.manager.find(User, {
                where: { vendor: { id: workflow.vendorTemp.vendorId } },
                relations: {
                    position: true,
                    // add other necessary relations if needed
                }
            });

            return masterData.map(master => ({
                id: master.id,
                action: 'NO_ACTION',
                reviewStatus: null,
                reviewRemark: null,
                data: {
                    ...master,
                    vendor: undefined,
                },
                originalData: {
                    ...master,
                    vendor: undefined,
                },
                permissions: ReviewHelper.getPermissions('NO_ACTION')
            }));
        }

        return response;
        
    }
}

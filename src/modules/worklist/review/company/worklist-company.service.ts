import { VendorCompanyTemp } from "@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistCompanyMapper } from "./worklist-company.mapper";

@Injectable()
export class WorklistCompanyService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorCompanyTemp)
        private readonly vendorCompanyTempRepository: Repository<VendorCompanyTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: {
                vendorTemp: true,
            },
        });

        const temp = await this.vendorCompanyTempRepository.findOne({
            where: {
                vendorTempId: workflow.vendorTemp.id,
            },
            relations: {
                vendorCompany: {
                    site: true,
                    businessType: true,
                    country: true,
                    province: true,
                    city: true,
                },

                site: true,
                businessType: true,
                country: true,
                province: true,
                city: true,
            },
        });

        if (!temp) {
            throw new NotFoundException(`Vendor Company not found`);
        }

        return WorklistCompanyMapper.toResponse(temp);
    }
}
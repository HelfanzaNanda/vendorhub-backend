import { VendorFinancialReportTemp } from "@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorklistFinancialReportMapper } from "./worklist-financial-report.mapper";

@Injectable()
export class WorklistFinancialReportService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorFinancialReportTemp)
        private readonly tempRepository: Repository<VendorFinancialReportTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const temp = await this.tempRepository.findOne({
            select: {
                id: true,
                currency: {
                    id: true,
                    name: true,
                    code: true,
                },
                year: true,
                periodFrom: true,
                periodTo: true,
                reportType: true,
                auditStatus: true,
                file: {
                    id: true,
                    fileName: true,
                    fileSize: true,
                },
                totalAssets: true,
                totalRevenue: true,
                totalLiabilities: true,
                currentAssets: true,
                currentLiabilities: true,
                netProfitLossAfterTax: true,
                reviewNotes: true,
                reviewStatus: true,
                vendorFinancialReport: {
                    id: true,
                    currency: {
                        id: true,
                        name: true,
                        code: true,
                    },
                    year: true,
                    periodFrom: true,
                    periodTo: true,
                    reportType: true,
                    auditStatus: true,
                    file: {
                        id: true,
                        fileName: true,
                        fileSize: true,
                    },
                    totalAssets: true,
                    totalRevenue: true,
                    totalLiabilities: true,
                    currentAssets: true,
                    currentLiabilities: true,
                    netProfitLossAfterTax: true,
                },
            },
            where: { vendorTempId: workflow.vendorTemp.id },
            relations: {
                vendorFinancialReport : {
                    currency: true,
                    file: true,
                },
                currency: true,
                file: true,
            },
        });

        if (!temp) {
            throw new NotFoundException(`FinancialReport not found`);
        }

        return WorklistFinancialReportMapper.toResponse(temp);
        
    }
}

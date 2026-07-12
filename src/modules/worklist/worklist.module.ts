import { Module } from '@nestjs/common';
import { WorklistController } from './worklist.controller';
import { WorklistService } from './worklist.service';
import { WorklistRepository } from './repositories/worklist.repository';
import { SlaService } from '@modules/workflow-transaction/workflow-engine/services/sla.service';
import { HolidayRepository } from '@modules/master/holiday/holiday.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';

// Temp Entities
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
import { VendorCompetencyTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity';
import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';

// Services
import { WorklistCompanyService } from './review/company/worklist-company.service';
import { WorklistPersonnelService } from './review/personnel/worklist-personnel.service';
import { WorklistBankService } from './review/bank/worklist-bank.service';
import { WorklistAffiliationService } from './review/affiliation/worklist-affiliation.service';
import { WorklistBusinessLicenseService } from './review/business-license/worklist-business-license.service';
import { WorklistCompetencyService } from './review/competency/worklist-competency.service';
import { WorklistDocumentService } from './review/document/worklist-document.service';
import { WorklistFinancialReportService } from './review/financial-report/worklist-financial-report.service';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MasterHoliday, 
            WorkflowTransaction,
            VendorCompanyTemp,
            VendorPersonnelTemp,
            VendorBankTemp,
            VendorAffiliationTemp,
            VendorBusinessLicenseTemp,
            VendorCompetencyTemp,
            VendorDocumentTemp,
            VendorFinancialReportTemp,
            WorkflowHistory,
        ])
    ],
    controllers: [WorklistController],
    providers: [
        WorklistService, SlaService, 
        WorklistCompanyService,
        WorklistPersonnelService,
        WorklistBankService,
        WorklistAffiliationService,
        WorklistBusinessLicenseService,
        WorklistCompetencyService,
        WorklistDocumentService,
        WorklistFinancialReportService,
        HolidayRepository, WorklistRepository
    ],
})
export class WorklistModule {}

import { BadRequestException } from '@nestjs/common';
import { SubmitWorklistDto, WorklistSubmitStatus } from './dto/submit-worklist.dto';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorStatusEnum } from '@common/enums/vendor.enum';
import { ModuleRef } from '@nestjs/core';
import { WorklistCompanyService } from './review/company/worklist-company.service';
import { WorklistPersonnelService } from './review/personnel/worklist-personnel.service';
import { WorklistBankService } from './review/bank/worklist-bank.service';
import { WorklistAffiliationService } from './review/affiliation/worklist-affiliation.service';
import { WorklistBusinessLicenseService } from './review/business-license/worklist-business-license.service';
import { WorklistCompetencyService } from './review/competency/worklist-competency.service';
import { WorklistDocumentService } from './review/document/worklist-document.service';
import { WorklistFinancialReportService } from './review/financial-report/worklist-financial-report.service';


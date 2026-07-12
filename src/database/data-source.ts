import { Area } from '@modules/master/area/entities/area.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
import { City } from '@modules/master/city/entities/city.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { TermsConditionItem } from '@modules/master/terms-condition-item/entities/terms-condition-item.entity';
import { TermsCondition } from '@modules/master/terms-condition/entities/term-condition.entity';
import { VendorStatus } from '@modules/master/vendor-status/entities/vendor-status.entity';
import { Menu } from '@modules/uman/menu/entities/menu.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { User } from '@modules/uman/user/entities/user.entity';
// import { CompanyIdentity } from '@modules/vendor/company-identity/entities/company-identity.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Position } from '@modules/master/position/entities/position.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { MasterWorkflowStepAssignment } from '@modules/master/workflow-step-assignment/entities/workflow-step-assignment.entity';
import { MasterWorkingCalendar } from '@modules/master/working-calendar/entities/working-calendar.entity';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';

import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorBusinessLicenseItem } from '@modules/vendor/vendor-business-license-item/entities/vendor-business-license-item.entity';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
import { VendorUserTemp } from '@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity';
import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';
import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
import { RunningNumber } from '@modules/running-number/entities/running-number.entity';
import { Title } from '@modules/master/title/entities/title.entity';
import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { IdentityType } from '@modules/master/identity-type/entities/identity-type.entity';
import { BankBranch } from '@modules/master/bank-branch/entities/bank-branch.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { VendorTermCondition } from '@modules/vendor/vendor-term-condition/entities/vendor-term-condition.entity';
import { VendorTermConditionReview } from '@modules/vendor/vendor-term-condition/entities/vendor-term-condition-review.entity';
import { VendorCategory } from '@modules/master/vendor-category/entities/vendor-category.entity';
import { VendorCategoryItem } from '@modules/master/vendor-category-item/entities/vendor-category-item.entity';

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    // entities: ['dist/**/*.entity.js'],
    // migrations: ['dist/database/migrations/*.js'],

    entities: [
        RunningNumber,
        User,
        Position,
        UserHasRole,
        Role,
        Permission,
        Menu,
        Site,
        Area,
        BusinessEntityType,
        Country,
        Province,
        City,
        VendorStatus,
        Title,
        JobType,
        IdentityType,
        BankBranch,
        Bank,
        Currency,
        AffiliateType,
        IndustryClassification,
        CompetencyItem,
        CompetencySubCategory,
        CompetencyCategory, 
        File,
        CompanyPersonnelType,
        DocumentType,
        Vendor,
        VendorCategory,
        VendorCategoryItem,
        // VendorStatus,
        // Site,
        // Area,
        VendorCompany,
        VendorPersonnel,
        VendorBank,
        VendorAffiliation,
        VendorBusinessLicense,
        VendorBusinessLicenseItem,
        VendorFinancialReport,
        VendorDocument,
        VendorTemp,
        VendorCompanyTemp,
        VendorPersonnelTemp,
        VendorUserTemp,
        VendorBankTemp,
        VendorAffiliationTemp,
        VendorBusinessLicenseTemp,
        VendorFinancialReportTemp,
        VendorDocumentTemp,
        VendorTermCondition,
        VendorTermConditionReview,
        TermsCondition,
        TermsConditionItem,
        MasterWorkflow,
        MasterWorkflowStep,
        MasterWorkflowStepAssignment,
        MasterWorkingCalendar,
        MasterHoliday,
        WorkflowTransaction,
        WorkflowTransactionStep,
        WorkflowHistory
    ],
    migrations: ['src/database/migrations/*.ts'],

    synchronize: false,
});

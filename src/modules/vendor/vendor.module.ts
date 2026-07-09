
import { VendorRegistrationModule } from './business-process/vendor-registration/vendor-registration.module';
import { VendorUpdateModule } from './business-process/vendor-update/vendor-update.module';
import { DigitalSignatureModule } from './business-process/digital-signature/digital-signature.module';
import { ProposedToRejectModule } from './business-process/proposed-to-reject/proposed-to-reject.module';
import { DeleteCompanyAccountModule } from './business-process/delete-company-account/delete-company-account.module';
import { ReactivationModule } from './business-process/reactivation/reactivation.module';
import { BlacklistUnblacklistModule } from './business-process/blacklist-unblacklist/blacklist-unblacklist.module';
import { RoleExpiredModule } from './business-process/role-expired/role-expired.module';
import { Module } from '@nestjs/common';
import { VendorModule as CoreVendorModule } from './vendor/vendor.module';
import { VendorCompanyModule } from './vendor-company/vendor-company.module';
import { VendorPersonnelModule } from './vendor-personnel/vendor-personnel.module';
import { VendorBankModule } from './vendor-bank/vendor-bank.module';
import { VendorAffiliationModule } from './vendor-affiliation/vendor-affiliation.module';
import { VendorBusinessLicenseModule } from './vendor-business-license/vendor-business-license.module';
import { VendorBusinessLicenseItemModule } from './vendor-business-license-item/vendor-business-license-item.module';
import { VendorFinancialReportModule } from './vendor-financial-report/vendor-financial-report.module';
import { VendorDocumentModule } from './vendor-document/vendor-document.module';
import { VendorTermConditionModule } from './vendor-term-condition/vendor-term-condition.module';
import { VendorCompetencyModule } from './vendor-competency/vendor-competency.module';

import { VendorTempModule } from './temporary/vendor-temp/vendor-temp.module';
import { VendorCompanyTempModule } from './temporary/vendor-company-temp/vendor-company-temp.module';
import { VendorPersonnelTempModule } from './temporary/vendor-personnel-temp/vendor-personnel-temp.module';
import { VendorUserTempModule } from './temporary/vendor-user-temp/vendor-user-temp.module';
import { VendorBankTempModule } from './temporary/vendor-bank-temp/vendor-bank-temp.module';
import { VendorAffiliationTempModule } from './temporary/vendor-affiliation-temp/vendor-affiliation-temp.module';
import { VendorBusinessLicenseTempModule } from './temporary/vendor-business-license-temp/vendor-business-license-temp.module';
import { VendorFinancialReportTempModule } from './temporary/vendor-financial-report-temp/vendor-financial-report-temp.module';
import { VendorDocumentTempModule } from './temporary/vendor-document-temp/vendor-document-temp.module';
import { VendorCompetencyTempModule } from './temporary/vendor-competency-temp/vendor-competency-temp.module';

@Module({
    imports: [
        VendorRegistrationModule,
        VendorUpdateModule,
        DigitalSignatureModule,
        ProposedToRejectModule,
        DeleteCompanyAccountModule,
        ReactivationModule,
        BlacklistUnblacklistModule,
        RoleExpiredModule,

        CoreVendorModule,
        VendorCompanyModule,
        VendorPersonnelModule,
        VendorBankModule,
        VendorAffiliationModule,
        VendorBusinessLicenseModule,
        VendorBusinessLicenseItemModule,
        VendorFinancialReportModule,
        VendorDocumentModule,
        VendorTermConditionModule,
        VendorCompetencyModule,
        VendorTempModule,
        VendorCompanyTempModule,
        VendorPersonnelTempModule,
        VendorUserTempModule,
        VendorBankTempModule,
        VendorAffiliationTempModule,
        VendorBusinessLicenseTempModule,
        VendorFinancialReportTempModule,
        VendorDocumentTempModule,
        VendorCompetencyTempModule,
    ],
    exports: [
        VendorRegistrationModule,
        VendorUpdateModule,
        DigitalSignatureModule,
        ProposedToRejectModule,
        DeleteCompanyAccountModule,
        ReactivationModule,
        BlacklistUnblacklistModule,
        RoleExpiredModule,

        CoreVendorModule,
        VendorCompanyModule,
        VendorPersonnelModule,
        VendorBankModule,
        VendorAffiliationModule,
        VendorBusinessLicenseModule,
        VendorBusinessLicenseItemModule,
        VendorFinancialReportModule,
        VendorDocumentModule,
        VendorTermConditionModule,
        VendorCompetencyModule,
        VendorTempModule,
        VendorCompanyTempModule,
        VendorPersonnelTempModule,
        VendorUserTempModule,
        VendorBankTempModule,
        VendorAffiliationTempModule,
        VendorBusinessLicenseTempModule,
        VendorFinancialReportTempModule,
        VendorDocumentTempModule,
        VendorCompetencyTempModule,
    ],
})
export class VendorModule {}

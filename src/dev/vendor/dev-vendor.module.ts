import { Module } from '@nestjs/common';
import { DevVendorController } from './dev-vendor.controller';
import { DevVendorService } from './dev-vendor.service';
import { VendorBuilder } from './builders/vendor.builder';
import { VendorCompanyBuilder } from './builders/vendor-company.builder';
import { VendorPersonnelBuilder } from './builders/vendor-personnel.builder';
import { VendorBankBuilder } from './builders/vendor-bank.builder';
import { VendorBusinessLicenseBuilder } from './builders/vendor-business-license.builder';
import { VendorCompetencyBuilder } from './builders/vendor-competency.builder';
import { VendorDocumentBuilder } from './builders/vendor-document.builder';
import { VendorFinancialReportBuilder } from './builders/vendor-financial-report.builder';
import { VendorUserAccessBuilder } from './builders/vendor-user-access.builder';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
    ],
    controllers: [DevVendorController],
    providers: [
        DevVendorService,
        VendorBuilder,
        VendorCompanyBuilder,
        VendorPersonnelBuilder,
        VendorBankBuilder,
        VendorBusinessLicenseBuilder,
        VendorCompetencyBuilder,
        VendorDocumentBuilder,
        VendorFinancialReportBuilder,
        VendorUserAccessBuilder,
    ],
})
export class DevVendorModule {}

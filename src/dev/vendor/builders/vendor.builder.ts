import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompanyBuilder } from './vendor-company.builder';
import { VendorPersonnelBuilder } from './vendor-personnel.builder';
import { VendorBankBuilder } from './vendor-bank.builder';
import { VendorBusinessLicenseBuilder } from './vendor-business-license.builder';
import { VendorCompetencyBuilder } from './vendor-competency.builder';
import { VendorDocumentBuilder } from './vendor-document.builder';
import { VendorFinancialReportBuilder } from './vendor-financial-report.builder';
import { VendorUserAccessBuilder } from './vendor-user-access.builder';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorStageEnum, VendorTypeEnum, VendorStatusEnum, VendorPriorityEnum } from '@common/enums/vendor.enum';
import { faker } from '@faker-js/faker';
import { VendorAffiliateBuilder } from './vendor-affiliate.builder';

@Injectable()
export class VendorBuilder {
    constructor(
        private readonly companyBuilder: VendorCompanyBuilder,
        private readonly personnelBuilder: VendorPersonnelBuilder,
        private readonly bankBuilder: VendorBankBuilder,
        private readonly affiliateBuilder: VendorAffiliateBuilder,
        private readonly licenseBuilder: VendorBusinessLicenseBuilder,
        private readonly competencyBuilder: VendorCompetencyBuilder,
        private readonly documentBuilder: VendorDocumentBuilder,
        private readonly financialReportBuilder: VendorFinancialReportBuilder,
        private readonly userAccessBuilder: VendorUserAccessBuilder,
    ) {}

    async build(manager: EntityManager, config: any) {
        const vendorRepo = manager.getRepository(Vendor);
        
        let vendor = vendorRepo.create({
            vendorCode: 'V' + faker.string.numeric(6),
            vendorStage: VendorStageEnum.VENDOR,
            vendorType: VendorTypeEnum.LOCAL,
            status: VendorStatusEnum.ACTIVE,
            priority: VendorPriorityEnum.VIP,
        });
        vendor = await vendorRepo.save(vendor);

        await this.companyBuilder.build(manager, vendor, config);
        await this.personnelBuilder.build(manager, vendor, config.personnel);
        await this.userAccessBuilder.build(manager, vendor, config.userAccess);
        await this.bankBuilder.build(manager, vendor, config.banks);
        await this.affiliateBuilder.build(manager, vendor, config);
        await this.licenseBuilder.build(manager, vendor, config);
        await this.competencyBuilder.build(manager, vendor, config.competencies);
        await this.documentBuilder.build(manager, vendor, config.documents);
        await this.financialReportBuilder.build(manager, vendor, config.financialReports);

        return {
            vendorId: vendor.id,
            vendorCode: vendor.vendorCode,
            summary: config
        };
    }
}

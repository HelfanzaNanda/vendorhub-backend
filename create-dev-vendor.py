import os

base_dir = "src/dev/vendor"

files = {
    f"{base_dir}/dev-vendor.module.ts": """import { Module } from '@nestjs/common';
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
""",
    f"{base_dir}/dev-vendor.service.ts": """import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateMasterVendorDto } from './dto/create-master-vendor.dto';
import { VendorBuilder } from './builders/vendor.builder';
import { SCENARIOS } from './constants/vendor-master.constant';

@Injectable()
export class DevVendorService {
    constructor(
        private readonly dataSource: DataSource,
        private readonly vendorBuilder: VendorBuilder,
    ) {}

    async generateVendor(dto: CreateMasterVendorDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const scenarioConfig = SCENARIOS[dto.scenario] || SCENARIOS.SMALL_VENDOR;
            const finalConfig = { ...scenarioConfig, ...dto.override };

            const result = await this.vendorBuilder.build(queryRunner.manager, finalConfig);
            
            await queryRunner.commitTransaction();
            
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async deleteVendor(id: number) {
        // Implementation
    }

    async resetVendors() {
        // Implementation
    }
}
""",
    f"{base_dir}/builders/vendor.builder.ts": """import { Injectable } from '@nestjs/common';
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

@Injectable()
export class VendorBuilder {
    constructor(
        private readonly companyBuilder: VendorCompanyBuilder,
        private readonly personnelBuilder: VendorPersonnelBuilder,
        private readonly bankBuilder: VendorBankBuilder,
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
            vendorStage: VendorStageEnum.REGISTERED,
            vendorType: VendorTypeEnum.LOCAL,
            status: VendorStatusEnum.ACTIVE,
            priority: VendorPriorityEnum.NORMAL,
        });
        vendor = await vendorRepo.save(vendor);

        await this.companyBuilder.build(manager, vendor.id, config);
        await this.personnelBuilder.build(manager, vendor.id, config.personnel);
        await this.bankBuilder.build(manager, vendor.id, config.banks);
        await this.licenseBuilder.build(manager, vendor.id, config);
        await this.competencyBuilder.build(manager, vendor.id, config.competencies);
        await this.documentBuilder.build(manager, vendor.id, config.documents);
        await this.financialReportBuilder.build(manager, vendor.id, config.financialReports);
        await this.userAccessBuilder.build(manager, vendor.id, config.userAccess);

        return {
            vendorId: vendor.id,
            vendorCode: vendor.vendorCode,
            summary: config
        };
    }
}
""",
    f"{base_dir}/builders/vendor-company.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VendorCompanyBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorCompany);
        const company = repo.create({
            vendorId,
            name: 'PT ' + faker.company.name(),
            npwp: faker.string.numeric(15),
            nib: faker.string.numeric(13),
            address: faker.location.streetAddress(),
        });
        return await repo.save(company);
    }
}
""",
    f"{base_dir}/builders/vendor-personnel.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VendorPersonnelBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorPersonnel);
        const results = [];
        // Add logic based on config.boardOfDirectors, etc.
        for (let i = 0; i < (config?.boardOfDirectors || 1); i++) {
            results.push(await repo.save(repo.create({
                vendorId,
                name: faker.person.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                position: 'Director',
            })));
        }
        return results;
    }
}
""",
    f"{base_dir}/builders/vendor-bank.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VendorBankBuilder {
    async build(manager: EntityManager, vendorId: number, count: number) {
        const repo = manager.getRepository(VendorBank);
        const results = [];
        for (let i = 0; i < (count || 1); i++) {
            results.push(await repo.save(repo.create({
                vendorId,
                accountName: faker.person.fullName(),
                accountNumber: faker.finance.accountNumber(),
            })));
        }
        return results;
    }
}
""",
    f"{base_dir}/builders/vendor-business-license.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';

@Injectable()
export class VendorBusinessLicenseBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorBusinessLicense);
        // impl
    }
}
""",
    f"{base_dir}/builders/vendor-competency.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';

@Injectable()
export class VendorCompetencyBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorCompetency);
        // impl
    }
}
""",
    f"{base_dir}/builders/vendor-document.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';

@Injectable()
export class VendorDocumentBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorDocument);
        // impl
    }
}
""",
    f"{base_dir}/builders/vendor-financial-report.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';

@Injectable()
export class VendorFinancialReportBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorFinancialReport);
        // impl
    }
}
""",
    f"{base_dir}/builders/vendor-user-access.builder.ts": """import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorUserAccess } from '@modules/vendor/vendor-user-access/entities/vendor-user-access.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VendorUserAccessBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorUserAccess);
        // impl
    }
}
""",
}

for path, content in files.items():
    with open(path, "w") as f:
        f.write(content)

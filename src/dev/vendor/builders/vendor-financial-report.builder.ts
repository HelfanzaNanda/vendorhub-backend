import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';
import { faker } from '@faker-js/faker';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';


@Injectable()
export class VendorFinancialReportBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorFinancialReport);
        const results = [];
        if (!vendor) {
            throw new NotFoundException('Vendor not found');
        }

        const currencies = await manager.find(Currency);
        if (!currencies.length) {
            throw new NotFoundException('Currency not found');
        }

        for (let i = 0; i < 3; i++) {
            results.push(await repo.save(repo.create({
                vendor,
                reportType: 'ANNUAL',
                auditStatus: faker.helpers.arrayElement(['AUDITED', 'UNAUDITED']),
                fileId : 1,
                currencyId : faker.helpers.arrayElement(currencies).id,
                currentAssets: faker.number.float({min : 1000000, max : 1000000000}),
                totalAssets: faker.number.float({min : 1000000, max : 1000000000}),
                currentLiabilities : faker.number.float({min : 1000000, max : 1000000000}),
                totalLiabilities : faker.number.float({min : 1000000, max : 1000000000}),
                totalRevenue : faker.number.float({min : 1000000, max : 1000000000}),
                netProfitLossAfterTax : faker.number.float({min : 1000000, max : 1000000000})
            })));
        }
        return results;
    }
}

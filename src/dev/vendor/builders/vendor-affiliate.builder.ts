import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { faker } from '@faker-js/faker';
import { Country } from '@modules/master/country/entities/country.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { BankBranch } from '@modules/master/bank-branch/entities/bank-branch.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';

@Injectable()
export class VendorAffiliateBuilder {
    async build(manager: EntityManager, vendor: Vendor, count: number) {
        const repo = manager.getRepository(VendorAffiliation);

        const results = [];

        const currencies = await manager.find(Currency);
        if (!currencies.length) {
            throw new NotFoundException('Currency not found');
        }

        for (let i = 0; i < 3; i++) {
            results.push(await repo.save(repo.create({
                vendor,
                affiliateTypeId: faker.helpers.arrayElement([1,2,3]),
                companyBusinessEntityTypeId : faker.helpers.arrayElement([1,2,3]),
                companyName: faker.company.name(),
                businessField : faker.lorem.words(10)
            })));
        }
        return results;
    }
}

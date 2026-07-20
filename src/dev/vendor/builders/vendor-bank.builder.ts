import { Injectable } from '@nestjs/common';
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

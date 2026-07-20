import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VendorCompanyBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorCompany);
        // const company = repo.create({
        //     vendorId,
        //     name: faker.company.name(),
        //     npwp: faker.string.numeric(16),
        //     nib: faker.string.numeric(13),
        //     address: faker.location.streetAddress(),
        // });
        // return await repo.save(company);
    }
}

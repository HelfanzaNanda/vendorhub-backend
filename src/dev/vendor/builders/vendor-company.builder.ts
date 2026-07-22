import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { faker } from '@faker-js/faker';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Injectable()
export class VendorCompanyBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorCompany);
        const company = repo.create({
            vendor : vendor,
            companyName: faker.company.name(),
            siteId: 1,
            businessTypeId: 1,
            staffCount: 30,
            countryId: 27,
            provinceId: 320,
            cityId: 299,
            postalCode: faker.string.numeric(6),
            website: faker.internet.url(),
            address: faker.location.streetAddress(),
            mapUrl: `https://www.google.com/maps?q=${faker.location.latitude()},${faker.location.longitude()}`
        });
        return await repo.save(company);
    }
}

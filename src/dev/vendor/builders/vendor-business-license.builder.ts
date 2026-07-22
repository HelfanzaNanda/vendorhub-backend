import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorBusinessLicenseItem } from '@modules/vendor/vendor-business-license-item/entities/vendor-business-license-item.entity';
import { faker } from '@faker-js/faker';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Injectable()
export class VendorBusinessLicenseBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorBusinessLicense);


        const items = await manager.find(IndustryClassification);
        if (!items.length) {
            throw new NotFoundException('Industry Classification not found');
        }

        const businessLisence = repo.create({
            vendor,
            fileId: 1,
        });
        const saved = await repo.save(businessLisence);


        for (let index = 0; index < 3; index++) {
            manager.save(manager.create(VendorBusinessLicenseItem, {
                vendorBusinessLicenseId : saved.id,
                industryClassificationId : faker.helpers.arrayElement(items.map(i => i.id))
            }))
        }

        return saved;
    }
}

import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { faker } from '@faker-js/faker';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Injectable()
export class VendorDocumentBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorDocument);
        const npwp = repo.create({
            vendor,
            fileId : 1,
            documentTypeId : 1,
            documentNumber : faker.string.numeric(16),
            address : faker.location.streetAddress(),
        });
        await repo.save(npwp);

        const taxPayer = repo.create({
            vendor,
            fileId : 1,
            documentTypeId : 2,
            publishDate : faker.date.future({years: 1}),
            taxpayerStatus : true,
        });
        await repo.save(taxPayer);

        const deedOfEstablishment = repo.create({
            vendor,
            fileId : 1,
            documentTypeId : 3,
            documentNumber : faker.string.numeric(5),
            publishDate : faker.date.future({years: 1}),
        });
        await repo.save(deedOfEstablishment);

        const deedOfAmendment = repo.create({
            vendor,
            fileId : 1,
            documentTypeId : 4,
            documentNumber : faker.string.numeric(5),
            publishDate : faker.date.future({years: 1}),
        });
        await repo.save(deedOfAmendment);

        const organize = repo.create({
            vendor,
            fileId : 1,
            documentTypeId : 5,
        });
        await repo.save(organize);
    }
}

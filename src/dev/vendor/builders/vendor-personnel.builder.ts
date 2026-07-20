import { Injectable } from '@nestjs/common';
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

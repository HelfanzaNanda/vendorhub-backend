import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';

@Injectable()
export class VendorCompetencyBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorCompetency);
        // impl
    }
}

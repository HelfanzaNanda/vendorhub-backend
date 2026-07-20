import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';

@Injectable()
export class VendorBusinessLicenseBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorBusinessLicense);
        // impl
    }
}

import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';

@Injectable()
export class VendorDocumentBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorDocument);
        // impl
    }
}

import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
// import { VendorUserAccess } from '@modules/vendor/vendor-user-access/entities/vendor-user-access.entity';
import { faker } from '@faker-js/faker';
import { User } from '@modules/uman/user/entities/user.entity';

@Injectable()
export class VendorUserAccessBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(User);
        // impl
    }
}

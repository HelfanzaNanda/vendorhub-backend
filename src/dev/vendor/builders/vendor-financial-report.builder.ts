import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';

@Injectable()
export class VendorFinancialReportBuilder {
    async build(manager: EntityManager, vendorId: number, config: any) {
        const repo = manager.getRepository(VendorFinancialReport);
        // impl
    }
}

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionService } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.service';
import { WorkflowCode } from '@common/enums/workflow.enum';

@Injectable()
export class DigitalSignatureService {
    constructor(
        @InjectRepository(VendorTemp)
        private vendorTempRepo: Repository<VendorTemp>,
        private workflowService: WorkflowTransactionService,
    ) { }

    async submit(userId: number, vendorId: number) {
        // 1. Cari vendor_temp berdasarkan vendorId
        // Assuming vendorId maps to vendorTemp.vendorId. If not, logic might need adjustment.
        const vendorTemp = await this.vendorTempRepo.findOne({
            where: { vendorId: vendorId },
            order: { createdAt: 'DESC' },
        });

        if (!vendorTemp) {
            throw new BadRequestException('Vendor temporary data not found.');
        }

        // 2. Validasi vendor_temp masih berstatus Draft/Revision
        // Note: VendorTemp status enum is DRAFT or SUBMITTED. Assuming DRAFT is acceptable.
        if (vendorTemp.status !== 'DRAFT') {
            throw new BadRequestException('Vendor temporary data is not in DRAFT state.');
        }

        // 3. Panggil Generic Workflow Engine
        return this.workflowService.start({
            workflowCode: WorkflowCode.DIGITAL_SIGNATURE,
            vendorTempId: vendorTemp.id,
        });
    }
}

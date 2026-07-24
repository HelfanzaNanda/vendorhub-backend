import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionService } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.service';
import { WorkflowCode } from '@common/enums/workflow.enum';
import { VendorStageEnum, VendorStatusEnum } from '@common/enums/vendor.enum';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Injectable()
export class VendorUpdateService {
    constructor(
        @InjectRepository(VendorTemp)
        private vendorTempRepo: Repository<VendorTemp>,
        @InjectRepository(Vendor)
        private vendorRepo: Repository<Vendor>,
        private workflowService: WorkflowTransactionService,
    ) { }

    async submit(userId: number, vendorId: number) {

        const vendor = await this.vendorRepo.findOne({where : {id : vendorId}});

        if (!vendor) throw new BadRequestException('Vendor not found.');

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

        if (vendor.status == VendorStatusEnum.REVISION) {
            return this.workflowService.restart({
                userId: userId,
                vendorTempId: vendorTemp.id,
            })
        }


        // 3. Panggil Generic Workflow Engine
        return this.workflowService.start({
            userId: userId,
            workflowCode: vendor.vendorStage == VendorStageEnum.CANDIDATE ? WorkflowCode.VENDOR_REGISTRATION : WorkflowCode.VENDOR_UPDATE,
            vendorTempId: vendorTemp.id,
        });
    }

    async getContext(userId : number, vendorId : number) {

        const vendor = await this.vendorRepo.findOne({where : {id : vendorId},relations : { vendorCompany : true}});

        if (!vendor) throw new BadRequestException('Vendor not found.');

        const vendorTemp = await this.vendorTempRepo.findOne({
            where: { vendorId: vendorId },
            order: { createdAt: 'DESC' },
        });

        if (!vendorTemp) {
            throw new BadRequestException('Vendor temporary data not found.');
        }

        const info = {
            vendorId : vendor.id,
            vendorType : vendor.vendorType
        };

        const permission = {
            canCreate : true,
            canEdit: true,
            canDelete: true,
            canSave: true,
            canSubmit: true,
        }

        if (vendor.status == VendorStatusEnum.WAITING_FOR_APPROVAL) {
            permission.canEdit = false;
            permission.canSave = false;
            permission.canSubmit = false;
            permission.canDelete = false;
        }

        return {
            info,
            permission,
        };
    }
}

import { Injectable } from '@nestjs/common';
import { CreateVendorDocumentTempDto } from './dto/create-vendor-document-temp.dto';
import { UpdateVendorDocumentTempDto } from './dto/update-vendor-document-temp.dto';
import { Repository } from 'typeorm';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorDocumentTempMapper } from './mapper/vendor-document-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorTempAction } from '@common/enums/temp-action.enum';

@Injectable()
export class VendorDocumentTempService {
    constructor(
        @InjectRepository(VendorDocumentTemp)
        private repo: Repository<VendorDocumentTemp>,
        @InjectRepository(VendorDocument)
        private masterRepo: Repository<VendorDocument>,
        private vendorTempService: VendorTempService,
    ) {}

    async getSingleton(vendorId: number) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        const item = await this.repo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true,
                },
            },
            where: { vendorTempId: draft.id },
            relations: {
                createdByUser: true,
                updatedByUser: true,
                vendorTemp: true,
                vendorDocument: true,
                documentType: true,
                file: true,
            },
        });

        if (!item) return null;
        return VendorDocumentTempMapper.toResponse(item);
    }

    async upsert(vendorId: number, data: UpdateVendorDocumentTempDto) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        let item = await this.repo.findOne({ where: { vendorTempId: draft.id } });
        const master = await this.masterRepo.findOne({ where: { vendorId } });

        if (item) {
            Object.assign(item, data);
            item.vendorDocumentId = master ? master.id : undefined;
            item.action = VendorTempAction.UPDATE;
        } else {
            item = this.repo.create({
                ...data,
                vendorTempId: draft.id,
                vendorDocumentId: master ? master.id : undefined,
                action: VendorTempAction.UPDATE,
            });
        }

        await this.repo.save(item);
        return this.getSingleton(vendorId);
    }
}

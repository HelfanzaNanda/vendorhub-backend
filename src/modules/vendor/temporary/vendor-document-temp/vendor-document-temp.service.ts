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
        const items = await this.repo.find({
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

        if (!items || items.length === 0) return [];
        return VendorDocumentTempMapper.toResponses(items);
    }

    async upsert(vendorId: number, data: UpdateVendorDocumentTempDto[]) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);

        for (const doc of data) {
            let item = await this.repo.findOne({ where: { vendorTempId: draft.id, documentTypeId: doc.documentTypeId } });
            const master = await this.masterRepo.findOne({ where: { vendorId, documentTypeId: doc.documentTypeId } });

            const docData = {
                vendorTempId: draft.id,
                documentTypeId: doc.documentTypeId,
                documentNumber: doc.documentNumber ?? undefined,
                address: doc.address ?? undefined,
                taxpayerStatus: doc.status !== undefined && doc.status !== null ? String(doc.status) : undefined,
                publishDate: doc.published_date ?? undefined,
                fileId: doc.fileId?.id ?? undefined,
                vendorDocumentId: master ? master.id : undefined,
                action: VendorTempAction.UPDATE,
            };

            if (item) {
                Object.assign(item, docData);
            } else {
                item = this.repo.create(docData);
            }
            await this.repo.save(item);
        }

        return this.getSingleton(vendorId);
    }
}

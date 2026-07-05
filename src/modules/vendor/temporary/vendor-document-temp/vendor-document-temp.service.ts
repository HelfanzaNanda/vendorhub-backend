import { Injectable } from '@nestjs/common';
import { CreateVendorDocumentTempDto } from './dto/create-vendor-document-temp.dto';
import { UpdateVendorDocumentTempDto } from './dto/update-vendor-document-temp.dto';
import { Repository } from 'typeorm';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorDocumentTempMapper } from './mapper/vendor-document-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';

@Injectable()
export class VendorDocumentTempService {
    constructor(
        @InjectRepository(VendorDocumentTemp)
        private repo: Repository<VendorDocumentTemp>,
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

        if (item) {
            Object.assign(item, data);
        } else {
            item = this.repo.create({
                ...data,
                vendorTempId: draft.id,
            });
        }

        await this.repo.save(item);
        return this.getSingleton(vendorId);
    }
}

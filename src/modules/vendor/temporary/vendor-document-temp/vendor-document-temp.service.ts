import { Injectable } from '@nestjs/common';
import { SaveVendorDocumentTempDto, VendorDocumentItemDto } from './dto/save-vendor-document-temp.dto';
import { Repository } from 'typeorm';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorDocumentTempMapper } from './mapper/vendor-document-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorTempAction } from '@common/enums/temp-action.enum';
import { DocumentTypeForVendorDocEnum, VendorDocumentPropertyMap } from '@common/enums/document-type.enum';
import { DocumentTypeService } from '@modules/master/document-type/document-type.service';
import { DateUtil } from '@common/utils/date.util';

@Injectable()
export class VendorDocumentTempService {
    constructor(
        @InjectRepository(VendorDocumentTemp)
        private repo: Repository<VendorDocumentTemp>,
        @InjectRepository(VendorDocument)
        private masterRepo: Repository<VendorDocument>,
        private vendorTempService: VendorTempService,
        private documentTypeService : DocumentTypeService
    ) {}

    async getSingleton(vendorId: number) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        const items = await this.repo.find({
            where: {
                vendorTempId: draft.id,
            },
            relations: {
                createdByUser: true,
                updatedByUser: true,
                vendorTemp: true,
                vendorDocument: true,
                documentType: true,
                file: true,
            },
        });

        let result: Record<string, any> = {};
        if (items.length) {
            for (const item of items) {
                const key = VendorDocumentPropertyMap[
                    item.documentType?.code as DocumentTypeForVendorDocEnum
                ];

                if (!key) continue;

                result[key] = VendorDocumentTempMapper.toResponse(item);
            }
            return result;
        }
        const master = await this.masterRepo.find({
            where: {
                vendorId,
            },
            relations: {
                createdByUser: true,
                updatedByUser: true,
                documentType: true,
                file: true,
            },
        });

        if (!master) {
            return {};
        }

        result = {};
        for (const item of master) {
            const key = VendorDocumentPropertyMap[
                item.documentType?.code as DocumentTypeForVendorDocEnum
            ];

            if (!key) continue;

            result[key] = VendorDocumentTempMapper.toResponse(item);
        }
        return result;

    }

    async saveSingletion(vendorId: number, dto: SaveVendorDocumentTempDto) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);

        for (const [documentType, property] of Object.entries(VendorDocumentPropertyMap)) {
            const payload = dto[property as keyof SaveVendorDocumentTempDto];
            if (!payload) continue;
            await this.upsertDocument(
                vendorId,
                draft.id,
                documentType as DocumentTypeForVendorDocEnum,
                payload,
            );
        }

        return this.getSingleton(vendorId);
    }

    private async upsertDocument(vendorId: number, vendorTempId: number, documentType: DocumentTypeForVendorDocEnum, payload: VendorDocumentItemDto) {

        const documentTypeEntity = await this.documentTypeService.findOneByCode(documentType);
        const master = await this.masterRepo.findOne({ where: { vendorId, documentTypeId: documentTypeEntity.id } });


        let entity = await this.repo.findOne({
            where: {
                vendorTempId,
                documentTypeId: documentTypeEntity.id,
            },
        });

        if (!entity) {

            entity = this.repo.create({
                vendorTempId,
                documentTypeId: documentTypeEntity.id,
                action: VendorTempAction.UPDATE,
                vendorDocumentId: master ? master.id : undefined,
            });

        }

        entity.documentNumber = payload.documentNumber;
        entity.address = payload.address;
        entity.taxpayerStatus = payload.taxpayerStatus;
        entity.publishDate = DateUtil.toDate(payload.publishedDate);
        entity.expiredDate = DateUtil.toDate(payload.expiredDate);
        entity.fileId = payload.fileId;

        await this.repo.save(entity);
    }
}

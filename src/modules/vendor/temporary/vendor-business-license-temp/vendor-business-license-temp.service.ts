import { Injectable } from '@nestjs/common';
import { CreateVendorBusinessLicenseTempDto } from './dto/create-vendor-business-license-temp.dto';
import { UpdateVendorBusinessLicenseTempDto } from './dto/update-vendor-business-license-temp.dto';
import { Repository, In } from 'typeorm';
import { VendorBusinessLicenseTemp } from './entities/vendor-business-license-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorBusinessLicenseTempMapper } from './mapper/vendor-business-license-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorTempAction } from '@common/enums/temp-action.enum';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';

@Injectable()
export class VendorBusinessLicenseTempService {
    constructor(
        @InjectRepository(VendorBusinessLicenseTemp)
        private repo: Repository<VendorBusinessLicenseTemp>,
        @InjectRepository(VendorBusinessLicense)
        private masterRepo: Repository<VendorBusinessLicense>,
        @InjectRepository(IndustryClassification)
        private icRepo: Repository<IndustryClassification>,
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
                vendorBusinessLicense: true,
                file: true,
            },
        });

        if (!item) return null;

        let industryClassifications: IndustryClassification[] = [];
        if (item.industryClassificationIds) {
            const ids = item.industryClassificationIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
            if (ids.length > 0) {
                industryClassifications = await this.icRepo.find({
                    where: { id: In(ids) }
                });
            }
        }

        return VendorBusinessLicenseTempMapper.toResponse(item, industryClassifications);
    }

    async upsert(vendorId: number, data: UpdateVendorBusinessLicenseTempDto) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        let item = await this.repo.findOne({ where: { vendorTempId: draft.id } });
        const master = await this.masterRepo.findOne({ where: { vendorId } });

        if (item) {
            Object.assign(item, data);
            item.vendorBusinessLicenseId = master ? master.id : undefined;
            item.action = VendorTempAction.UPDATE;
        } else {
            item = this.repo.create({
                ...data,
                vendorTempId: draft.id,
                vendorBusinessLicenseId: master ? master.id : undefined,
                action: VendorTempAction.UPDATE,
                industryClassificationIds: data.industryClassificationIds?.join(',') ?? undefined,
            });
        }

        await this.repo.save(item);
        return this.getSingleton(vendorId);
    }
}

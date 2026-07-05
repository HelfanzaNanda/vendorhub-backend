import { Injectable } from '@nestjs/common';
import { CreateVendorBusinessLicenseTempDto } from './dto/create-vendor-business-license-temp.dto';
import { UpdateVendorBusinessLicenseTempDto } from './dto/update-vendor-business-license-temp.dto';
import { Repository } from 'typeorm';
import { VendorBusinessLicenseTemp } from './entities/vendor-business-license-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorBusinessLicenseTempMapper } from './mapper/vendor-business-license-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';

@Injectable()
export class VendorBusinessLicenseTempService {
    constructor(
        @InjectRepository(VendorBusinessLicenseTemp)
        private repo: Repository<VendorBusinessLicenseTemp>,
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
        return VendorBusinessLicenseTempMapper.toResponse(item);
    }

    async upsert(vendorId: number, data: UpdateVendorBusinessLicenseTempDto) {
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

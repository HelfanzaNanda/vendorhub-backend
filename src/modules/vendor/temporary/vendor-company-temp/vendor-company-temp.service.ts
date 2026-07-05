import { Injectable } from '@nestjs/common';
import { CreateVendorCompanyTempDto } from './dto/create-vendor-company-temp.dto';
import { UpdateVendorCompanyTempDto } from './dto/update-vendor-company-temp.dto';
import { Repository } from 'typeorm';
import { VendorCompanyTemp } from './entities/vendor-company-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorCompanyTempMapper } from './mapper/vendor-company-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';

@Injectable()
export class VendorCompanyTempService {
    constructor(
        @InjectRepository(VendorCompanyTemp)
        private repo: Repository<VendorCompanyTemp>,
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
                vendorCompany: true,
                site: true,
                businessType: true,
                country: true,
                province: true,
                city: true,
            },
        });

        if (!item) return null;
        return VendorCompanyTempMapper.toResponse(item);
    }

    async upsert(vendorId: number, data: UpdateVendorCompanyTempDto) {
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

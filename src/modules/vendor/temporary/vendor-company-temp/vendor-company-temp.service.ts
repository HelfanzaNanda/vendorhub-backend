import { Injectable } from '@nestjs/common';
import { CreateVendorCompanyTempDto } from './dto/create-vendor-company-temp.dto';
import { UpdateVendorCompanyTempDto } from './dto/update-vendor-company-temp.dto';
import { Repository } from 'typeorm';
import { VendorCompanyTemp } from './entities/vendor-company-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorCompanyTempMapper } from './mapper/vendor-company-temp.mapper';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorTempAction } from '@common/enums/temp-action.enum';
import { VendorCompanyService } from '@modules/vendor/vendor-company/vendor-company.service';

@Injectable()
export class VendorCompanyTempService {
    constructor(
        @InjectRepository(VendorCompanyTemp)
        private repo: Repository<VendorCompanyTemp>,
        @InjectRepository(VendorCompany)
        private masterRepo: Repository<VendorCompany>,
        private vendorTempService: VendorTempService,
    ) {}

    async getSingleton(vendorId: number) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        const item = await this.repo.findOne({
            select: {
                vendorTempId : true,
                vendorCompanyId : true,
                id : true,
                companyName: true,
                staffCount: true,
                mapUrl: true,
                address: true,
                businessType: {
                    name: true,
                    id : true,
                },
                site : {
                    name : true,
                    id : true,
                },
                country : {
                    name : true,
                    id : true,
                },
                province : {
                    name : true,
                    id : true,
                },
                city : {
                    name : true,
                    id : true,
                },
                postalCode : true,
                website : true,
                action : true,
                reviewNotes: true,
                reviewStatus : true
            },
            where: { vendorTempId: draft.id },
            relations: {
                vendorTemp: true,
                vendorCompany: true,
                site: true,
                businessType: true,
                country: true,
                province: true,
                city: true,
            },
        });

        if (item) {
            return VendorCompanyTempMapper.toResponse(item);
        }
        const master = await this.masterRepo.findOne({
            select: {
                vendorId: true,
                id : true,
                companyName: true,
                staffCount: true,
                mapUrl: true,
                address: true,
                businessType: {
                    name: true,
                    id : true,
                },
                site : {
                    name : true,
                    id : true,
                },
                country : {
                    id : true,
                    name : true,
                },
                province : {
                    name : true,
                    id : true,
                },
                city : {
                    name : true,
                    id : true,
                },
                postalCode : true,
                website : true
            },
            where: { vendorId },
            relations: {
                vendor: true,
                site: true,
                businessType: true,
                country: true,
                province: true,
                city: true,
            },
        });
        
        if (!master) {
            return null;
        }
        return VendorCompanyTempMapper.toResponse(master);
    }

    async upsert(vendorId: number, data: UpdateVendorCompanyTempDto) {
        const draft = await this.vendorTempService.getOrCreateDraft(vendorId);
        let item = await this.repo.findOne({ where: { vendorTempId: draft.id } });
        const master = await this.masterRepo.findOne({ where: { vendorId } });

        if (item) {
            Object.assign(item, data);
            item.countryId = master?.countryId;
            item.vendorCompanyId = master ? master.id : undefined;
            item.action = VendorTempAction.UPDATE;
        } else {
            item = this.repo.create({
                ...data,
                vendorTempId: draft.id,
                countryId : master?.countryId,
                vendorCompanyId: master ? master.id : undefined,
                action: VendorTempAction.UPDATE,
            });
        }

        await this.repo.save(item);
        return this.getSingleton(vendorId);
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorCompanyTempDto } from './dto/create-vendor-company-temp.dto';
import { UpdateVendorCompanyTempDto } from './dto/update-vendor-company-temp.dto';
import { Repository } from 'typeorm';
import { VendorCompanyTemp } from './entities/vendor-company-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORCOMPANYTEMP_FIELDS } from './query/vendor-company-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorCompanyTempMapper } from './mapper/vendor-company-temp.mapper';

@Injectable()
export class VendorCompanyTempService {
    constructor(
        @InjectRepository(VendorCompanyTemp)
        private repo: Repository<VendorCompanyTemp>,
    ) {}

    async create(data: CreateVendorCompanyTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorCompany', 'vendorCompany');
        qb.leftJoinAndSelect('c.site', 'site');
        qb.leftJoinAndSelect('c.businessType', 'businessType');
        qb.leftJoinAndSelect('c.country', 'country');
        qb.leftJoinAndSelect('c.province', 'province');
        qb.leftJoinAndSelect('c.city', 'city');

        const selectColumns = Object.values(VENDORCOMPANYTEMP_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORCOMPANYTEMP_FIELDS);
        return {
            data: VendorCompanyTempMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const item = await this.repo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true,
                },
            },
            where: { id },
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
        if (!item) throw new NotFoundException();
        return VendorCompanyTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorCompanyTempDto) {
        const item = await this.repo.findOne({ where: { id } });
        if (!item) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(item, data);
        return this.repo.save(item);
    }

    async delete(id: number) {
        const item = await this.repo.findOne({ where: { id } });
        if (!item) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        item.deletedBy = userId;
        item.deletedAt = new Date();

        return this.repo.save(item);
    }
}

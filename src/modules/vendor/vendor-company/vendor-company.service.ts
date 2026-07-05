import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorCompanyDto } from './dto/create-vendor-company.dto';
import { UpdateVendorCompanyDto } from './dto/update-vendor-company.dto';
import { Repository } from 'typeorm';
import { VendorCompany } from './entities/vendor-company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORCOMPANY_FIELDS } from './query/vendor-company-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorCompanyMapper } from './mapper/vendor-company.mapper';

@Injectable()
export class VendorCompanyService {
    constructor(
        @InjectRepository(VendorCompany)
        private repo: Repository<VendorCompany>,
    ) {}

    async create(data: CreateVendorCompanyDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.site', 'site');
        qb.leftJoinAndSelect('c.businessType', 'businessType');
        qb.leftJoinAndSelect('c.country', 'country');
        qb.leftJoinAndSelect('c.province', 'province');
        qb.leftJoinAndSelect('c.city', 'city');

        const selectColumns = Object.values(VENDORCOMPANY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORCOMPANY_FIELDS);
        return {
            data: VendorCompanyMapper.toResponses(result.data),
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
                vendor: true,
                site: true,
                businessType: true,
                country: true,
                province: true,
                city: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorCompanyMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorCompanyDto) {
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

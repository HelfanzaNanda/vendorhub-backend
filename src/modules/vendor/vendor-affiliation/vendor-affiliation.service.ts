import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorAffiliationDto } from './dto/create-vendor-affiliation.dto';
import { UpdateVendorAffiliationDto } from './dto/update-vendor-affiliation.dto';
import { Repository } from 'typeorm';
import { VendorAffiliation } from './entities/vendor-affiliation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORAFFILIATION_FIELDS } from './query/vendor-affiliation-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorAffiliationMapper } from './mapper/vendor-affiliation.mapper';

@Injectable()
export class VendorAffiliationService {
    constructor(
        @InjectRepository(VendorAffiliation)
        private repo: Repository<VendorAffiliation>,
    ) {}

    async create(data: CreateVendorAffiliationDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.affiliateType', 'affiliateType');
        qb.leftJoinAndSelect(
            'c.companyBusinessEntityType',
            'companyBusinessEntityType',
        );

        const selectColumns = Object.values(VENDORAFFILIATION_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORAFFILIATION_FIELDS);
        return {
            data: VendorAffiliationMapper.toResponses(result.data),
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
                affiliateType: true,
                companyBusinessEntityType: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorAffiliationMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorAffiliationDto) {
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

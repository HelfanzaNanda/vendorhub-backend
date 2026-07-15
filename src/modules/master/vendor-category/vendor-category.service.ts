import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VendorCategory } from './entities/vendor-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateVendorCategoryDto } from './dto/create-vendor-category.dto';
import { VENDOR_PRIORITY_FIELDS } from '../vendor-priority/query/vendor-priority-field.meta';
import { VendorCategoryMapper } from './mapper/vendor-category.mapper';
import { UpdateVendorCategoryDto } from './dto/update-vendor-category.dto';
import { VENDOR_CATEGORY_FIELDS } from './query/vendor-category-field.meta';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';
import { VendorCategoryItem } from '../vendor-category-item/entities/vendor-category-item.entity';

@Injectable()
export class VendorCategoryService {
    constructor(
        @InjectRepository(VendorCategory)
        private vendorCategoryRepo: Repository<VendorCategory>,
    ) {}

    async create(data: CreateVendorCategoryDto) {
        return this.vendorCategoryRepo.save(
            this.vendorCategoryRepo.create(data),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.vendorCategoryRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(VENDOR_CATEGORY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, VENDOR_CATEGORY_FIELDS);
        return {
            data: VendorCategoryMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const vendorCategory = await this.vendorCategoryRepo.findOne({
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
            },
        });
        if (!vendorCategory) throw new NotFoundException();
        return VendorCategoryMapper.toResponse(vendorCategory);
    }

    async update(id: number, data: UpdateVendorCategoryDto) {
        const vendorCategory = await this.vendorCategoryRepo.findOne({
            where: { id },
        });
        if (!vendorCategory)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(vendorCategory, data);
        return this.vendorCategoryRepo.save(vendorCategory);
    }

    async delete(id: number) {
        const vendorCategory = await this.vendorCategoryRepo.findOne({
            where: { id },
        });
        if (!vendorCategory)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        vendorCategory.deletedBy = userId;
        vendorCategory.deletedAt = new Date();

        return this.vendorCategoryRepo.save(vendorCategory);
    }

    async findOptions() {
        const vendorCategories = await this.vendorCategoryRepo.createQueryBuilder('c')
            .select(['c.id', 'c.name'])
            .where((qb) => {
                const subQuery = qb.subQuery()
                    .select('1')
                    .from(VendorCategoryItem, 'vci')
                    .where('vci.vendor_category_id = c.id')
                    .andWhere('vci.deleted_at IS NULL')
                    .getQuery();
                return 'EXISTS (' + subQuery + ')';
            })
            .getMany();
        return LookupMapper.toResponses(
            vendorCategories,
            (vendorCategory) => vendorCategory.id,
            (vendorCategory) => vendorCategory.name,
        );
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VendorCategoryItem } from './entities/vendor-category-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateVendorCategoryItemDto } from './dto/create-vendor-category-item.dto';
import { VENDOR_CATEGORY_ITEM_FIELDS } from './query/vendor-category-item-field.meta';
import { VendorCategoryItemMapper } from './mapper/vendor-category-item.mapper';
import { UpdateVendorCategoryItemDto } from './dto/update-vendor-category-item.dto';

@Injectable()
export class VendorCategoryItemService {
    constructor(
        @InjectRepository(VendorCategoryItem)
        private vendorCategoryItemRepo: Repository<VendorCategoryItem>
    ) { }

    async create(data : CreateVendorCategoryItemDto) {
        return this.vendorCategoryItemRepo.save(this.vendorCategoryItemRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.vendorCategoryItemRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(VENDOR_CATEGORY_ITEM_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, VENDOR_CATEGORY_ITEM_FIELDS);
        return {
            data : VendorCategoryItemMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const vendorCategoryItem = await this.vendorCategoryItemRepo.findOne({ 
            select: {
                createdByUser : {
                    username: true,
                },
                updatedByUser: {
                    username : true
                }
            },
            where: { id }, 
            relations : {
                createdByUser : true, 
                updatedByUser : true 
            }
        });
        if (!vendorCategoryItem) throw new NotFoundException();
        return VendorCategoryItemMapper.toResponse(vendorCategoryItem);
    }

    async update(id: number, data : UpdateVendorCategoryItemDto) {
        const vendorCategoryItem = await this.vendorCategoryItemRepo.findOne({ where: { id } });
        if (!vendorCategoryItem) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(vendorCategoryItem, data);
        return this.vendorCategoryItemRepo.save(vendorCategoryItem);
    }

    async delete(id: number) {
        const vendorCategoryItem = await this.vendorCategoryItemRepo.findOne({ where: { id } });
        if (!vendorCategoryItem) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        vendorCategoryItem.deletedBy = userId;
        vendorCategoryItem.deletedAt = new Date();

        return this.vendorCategoryItemRepo.save(vendorCategoryItem);
    }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBusinessLicenseItemDto } from './dto/create-vendor-business-license-item.dto';
import { UpdateVendorBusinessLicenseItemDto } from './dto/update-vendor-business-license-item.dto';
import { Repository } from 'typeorm';
import { VendorBusinessLicenseItem } from './entities/vendor-business-license-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBUSINESSLICENSEITEM_FIELDS } from './query/vendor-business-license-item-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorBusinessLicenseItemMapper } from './mapper/vendor-business-license-item.mapper';

@Injectable()
export class VendorBusinessLicenseItemService {
    constructor(
        @InjectRepository(VendorBusinessLicenseItem)
        private repo: Repository<VendorBusinessLicenseItem>,
    ) {}

    async create(data: CreateVendorBusinessLicenseItemDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect(
            'c.vendorBusinessLicense',
            'vendorBusinessLicense',
        );
        qb.leftJoinAndSelect(
            'c.industryClassification',
            'industryClassification',
        );

        const selectColumns = Object.values(
            VENDORBUSINESSLICENSEITEM_FIELDS,
        ).map((f) => f.column);
        qb.select(selectColumns);

        const result = await paginate(
            qb,
            query,
            VENDORBUSINESSLICENSEITEM_FIELDS,
        );
        return {
            data: VendorBusinessLicenseItemMapper.toResponses(result.data),
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
                vendorBusinessLicense: true,
                industryClassification: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorBusinessLicenseItemMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorBusinessLicenseItemDto) {
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

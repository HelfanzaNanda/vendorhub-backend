import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDOR_FIELDS } from './query/vendor-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorMapper } from './mapper/vendor.mapper';

@Injectable()
export class VendorService {
    constructor(
        @InjectRepository(Vendor)
        private repo: Repository<Vendor>,
    ) {}

    async create(data: CreateVendorDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorStatus', 'vendorStatus');

        const selectColumns = Object.values(VENDOR_FIELDS).map((f) => f.column);
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDOR_FIELDS);
        return {
            data: VendorMapper.toResponses(result.data),
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
                updatedByUser: true
            },
        });
        if (!item) throw new NotFoundException();
        return VendorMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorDto) {
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

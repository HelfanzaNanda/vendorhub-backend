import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VendorPriority } from './entities/vendor-priority.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateVendorPriorityDto } from './dto/create-vendor-priority.dto';
import { VENDOR_PRIORITY_FIELDS } from './query/vendor-priority-field.meta';
import { VendorPriorityMapper } from './mapper/vendor-priority.mapper';
import { UpdateVendorPriorityDto } from './dto/update-vendor-priority.dto';
@Injectable()
export class VendorPriorityService {
    constructor(
        @InjectRepository(VendorPriority)
        private vendorPriorityRepo: Repository<VendorPriority>,
    ) {}

    async create(data: CreateVendorPriorityDto) {
        return this.vendorPriorityRepo.save(
            this.vendorPriorityRepo.create(data),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.vendorPriorityRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(VENDOR_PRIORITY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, VENDOR_PRIORITY_FIELDS);
        return {
            data: VendorPriorityMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const vendorPriority = await this.vendorPriorityRepo.findOne({
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
        if (!vendorPriority) throw new NotFoundException();
        return VendorPriorityMapper.toResponse(vendorPriority);
    }

    async update(id: number, data: UpdateVendorPriorityDto) {
        const vendorPriority = await this.vendorPriorityRepo.findOne({
            where: { id },
        });
        if (!vendorPriority)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(vendorPriority, data);
        return this.vendorPriorityRepo.save(vendorPriority);
    }

    async delete(id: number) {
        const vendorPriority = await this.vendorPriorityRepo.findOne({
            where: { id },
        });
        if (!vendorPriority)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        vendorPriority.deletedBy = userId;
        vendorPriority.deletedAt = new Date();

        return this.vendorPriorityRepo.save(vendorPriority);
    }
}

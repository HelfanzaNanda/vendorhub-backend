import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VendorStatus } from './entities/vendor-status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateVendorStatusDto } from './dto/create-vendor-status.dto';
import { VENDOR_STATUS_FIELDS } from './query/vendor-status-field.meta';
import { VendorStatusMapper } from './mapper/vendor-status.mapper';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';

@Injectable()
export class VendorStatusService {
    constructor(
        @InjectRepository(VendorStatus)
        private vendorStatusRepo: Repository<VendorStatus>
    ) { }

    async create(data : CreateVendorStatusDto) {
        return this.vendorStatusRepo.save(this.vendorStatusRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.vendorStatusRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(VENDOR_STATUS_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, VENDOR_STATUS_FIELDS);
        return {
            data : VendorStatusMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const vendorStatus = await this.vendorStatusRepo.findOne({ 
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
        if (!vendorStatus) throw new NotFoundException();
        return VendorStatusMapper.toResponse(vendorStatus);
    }

    async update(id: number, data : UpdateVendorStatusDto) {
        const vendorStatus = await this.vendorStatusRepo.findOne({ where: { id } });
        if (!vendorStatus) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(vendorStatus, data);
        return this.vendorStatusRepo.save(vendorStatus);
    }

    async delete(id: number) {
        const vendorStatus = await this.vendorStatusRepo.findOne({ where: { id } });
        if (!vendorStatus) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        vendorStatus.deletedBy = userId;
        vendorStatus.deletedAt = new Date();

        return this.vendorStatusRepo.save(vendorStatus);
    }
}
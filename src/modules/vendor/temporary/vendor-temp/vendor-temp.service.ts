import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorTempDto } from './dto/create-vendor-temp.dto';
import { UpdateVendorTempDto } from './dto/update-vendor-temp.dto';
import { Repository } from 'typeorm';
import { VendorTemp } from './entities/vendor-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORTEMP_FIELDS } from './query/vendor-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorTempMapper } from './mapper/vendor-temp.mapper';

@Injectable()
export class VendorTempService {
    constructor(
        @InjectRepository(VendorTemp)
        private repo: Repository<VendorTemp>
    ) { }

    async create(data: CreateVendorTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        
        const selectColumns = Object.values(VENDORTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORTEMP_FIELDS);
        return {
            data: VendorTempMapper.toResponses(result.data),
            meta: result.meta
        };
    }

    async findOne(id: number) {
        const item = await this.repo.findOne({ 
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true
                }
            },
            where: { id }, 
            relations: {
                createdByUser: true, 
                updatedByUser: true,
                vendor: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorTempDto) {
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

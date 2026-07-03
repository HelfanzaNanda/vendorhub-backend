import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorUserTempDto } from './dto/create-vendor-user-temp.dto';
import { UpdateVendorUserTempDto } from './dto/update-vendor-user-temp.dto';
import { Repository } from 'typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORUSERTEMP_FIELDS } from './query/vendor-user-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorUserTempMapper } from './mapper/vendor-user-temp.mapper';

@Injectable()
export class VendorUserTempService {
    constructor(
        @InjectRepository(VendorUserTemp)
        private repo: Repository<VendorUserTemp>
    ) { }

    async create(data: CreateVendorUserTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorUser', 'vendorUser');
        qb.leftJoinAndSelect('c.position', 'position');
        qb.leftJoinAndSelect('c.file', 'file');
        
        const selectColumns = Object.values(VENDORUSERTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORUSERTEMP_FIELDS);
        return {
            data: VendorUserTempMapper.toResponses(result.data),
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
                vendorTemp: true,
                vendorUser: true,
                position: true,
                file: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorUserTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorUserTempDto) {
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

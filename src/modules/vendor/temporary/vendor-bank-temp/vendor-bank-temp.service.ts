import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBankTempDto } from './dto/create-vendor-bank-temp.dto';
import { UpdateVendorBankTempDto } from './dto/update-vendor-bank-temp.dto';
import { Repository } from 'typeorm';
import { VendorBankTemp } from './entities/vendor-bank-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBANKTEMP_FIELDS } from './query/vendor-bank-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorBankTempMapper } from './mapper/vendor-bank-temp.mapper';

@Injectable()
export class VendorBankTempService {
    constructor(
        @InjectRepository(VendorBankTemp)
        private repo: Repository<VendorBankTemp>
    ) { }

    async create(data: CreateVendorBankTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorBank', 'vendorBank');
        qb.leftJoinAndSelect('c.bankBranch', 'bankBranch');
        qb.leftJoinAndSelect('c.currency', 'currency');
        qb.leftJoinAndSelect('c.file', 'file');
        
        const selectColumns = Object.values(VENDORBANKTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORBANKTEMP_FIELDS);
        return {
            data: VendorBankTempMapper.toResponses(result.data),
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
                vendorBank: true,
                bankBranch: true,
                currency: true,
                file: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorBankTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorBankTempDto) {
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

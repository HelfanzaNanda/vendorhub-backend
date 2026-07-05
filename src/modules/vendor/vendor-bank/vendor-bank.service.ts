import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBankDto } from './dto/create-vendor-bank.dto';
import { UpdateVendorBankDto } from './dto/update-vendor-bank.dto';
import { Repository } from 'typeorm';
import { VendorBank } from './entities/vendor-bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBANK_FIELDS } from './query/vendor-bank-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorBankMapper } from './mapper/vendor-bank.mapper';

@Injectable()
export class VendorBankService {
    constructor(
        @InjectRepository(VendorBank)
        private repo: Repository<VendorBank>,
    ) {}

    async create(data: CreateVendorBankDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.bankBranch', 'bankBranch');
        qb.leftJoinAndSelect('c.currency', 'currency');
        qb.leftJoinAndSelect('c.file', 'file');

        const selectColumns = Object.values(VENDORBANK_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORBANK_FIELDS);
        return {
            data: VendorBankMapper.toResponses(result.data),
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
                bankBranch: true,
                currency: true,
                file: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorBankMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorBankDto) {
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

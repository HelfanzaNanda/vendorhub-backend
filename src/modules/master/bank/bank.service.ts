import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { BANK_FIELDS } from './query/bank-field.meta';
import { RequestContext } from '@common/context/request-context';
import { BankMapper } from './mapper/bank.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private bankRepo: Repository<Bank>,
    ) {}

    async create(data: CreateBankDto) {
        return this.bankRepo.save(this.bankRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.bankRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(BANK_FIELDS).map((f) => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, BANK_FIELDS);
        return {
            data: BankMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const bank = await this.bankRepo.findOne({
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
        if (!bank) throw new NotFoundException();
        return BankMapper.toResponse(bank);
    }

    async update(id: number, data: UpdateBankDto) {
        const bank = await this.bankRepo.findOne({ where: { id } });
        if (!bank) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(bank, data);
        return this.bankRepo.save(bank);
    }

    async delete(id: number) {
        const bank = await this.bankRepo.findOne({ where: { id } });
        if (!bank) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        bank.deletedBy = userId;
        bank.deletedAt = new Date();

        return this.bankRepo.save(bank);
    }

    async findOptions(countryId: number) {
        const bank = await this.bankRepo.find({
            where: {
                country: {
                    id: countryId,
                },
            },
        });
        return LookupMapper.toResponses(
            bank,
            (bank) => bank.id,
            (bank) => bank.name,
        );
    }
}

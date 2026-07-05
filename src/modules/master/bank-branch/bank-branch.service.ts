import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankBranchDto } from './dto/create-bank-branch.dto';
import { UpdateBankBranchDto } from './dto/update-bank-branch.dto';
import { Repository } from 'typeorm';
import { BankBranch } from './entities/bank-branch.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { BANK_BRANCH_FIELDS } from './query/bank-branch-field.meta';
import { RequestContext } from '@common/context/request-context';
import { BankBranchMapper } from './mapper/bank-branch.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class BankBranchService {
    constructor(
        @InjectRepository(BankBranch)
        private bankBranchRepo: Repository<BankBranch>,
    ) {}

    async create(data: CreateBankBranchDto) {
        return this.bankBranchRepo.save(
            this.bankBranchRepo.create({
                code: data.code,
                name: data.name,
                address: data.address,
                bank: { id: data.bankId } as Bank,
            }),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.bankBranchRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.bank', 'bank');

        const selectColumns = Object.values(BANK_BRANCH_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, BANK_BRANCH_FIELDS);
        return {
            data: BankBranchMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const bankBranch = await this.bankBranchRepo.findOne({
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
                bank: true,
            },
        });
        if (!bankBranch) throw new NotFoundException();
        return BankBranchMapper.toResponse(bankBranch);
    }

    async update(id: number, data: UpdateBankBranchDto) {
        const bankBranch = await this.bankBranchRepo.findOne({ where: { id } });
        if (!bankBranch)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(bankBranch, data);
        return this.bankBranchRepo.save(bankBranch);
    }

    async delete(id: number) {
        const bankBranch = await this.bankBranchRepo.findOne({ where: { id } });
        if (!bankBranch)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        bankBranch.deletedBy = userId;
        bankBranch.deletedAt = new Date();

        return this.bankBranchRepo.save(bankBranch);
    }

    async findOptions(bankId: number) {
        const bankBranch = await this.bankBranchRepo.find({
            where: {
                bank: {
                    id: bankId,
                },
            },
        });
        return LookupMapper.toResponses(
            bankBranch,
            (bankBranch) => bankBranch.id,
            (bankBranch) => `${bankBranch.code} - ${bankBranch.name}`,
            // bankBranch => ({
            //     code : bankBranch.code
            // })
        );
    }
}

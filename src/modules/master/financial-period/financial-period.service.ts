import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFinancialPeriodDto } from './dto/create-financial-period.dto';
import { UpdateFinancialPeriodDto } from './dto/update-financial-period.dto';
import { Repository } from 'typeorm';
import { FinancialPeriod } from './entities/financial-period.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { FINANCIAL_PERIOD_FIELDS } from './query/financial-period-field.meta';
import { RequestContext } from '@common/context/request-context';
import { FinancialPeriodMapper } from './mapper/financial-period.mapper';

@Injectable()
export class FinancialPeriodService {
    constructor(
        @InjectRepository(FinancialPeriod)
        private financialPeriodRepo: Repository<FinancialPeriod>
    ) { }

    async create(data: CreateFinancialPeriodDto) {
        return this.financialPeriodRepo.save(this.financialPeriodRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.financialPeriodRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(FINANCIAL_PERIOD_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, FINANCIAL_PERIOD_FIELDS);
        return {
            data: FinancialPeriodMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const financialPeriod = await this.financialPeriodRepo.findOne({
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
                updatedByUser: true
            }
        });
        if (!financialPeriod) throw new NotFoundException();
        return FinancialPeriodMapper.toResponse(financialPeriod);
    }

    async update(id: number, data: UpdateFinancialPeriodDto) {
        const financialPeriod = await this.financialPeriodRepo.findOne({ where: { id } });
        if (!financialPeriod) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(financialPeriod, data);
        return this.financialPeriodRepo.save(financialPeriod);
    }

    async delete(id: number) {
        const financialPeriod = await this.financialPeriodRepo.findOne({ where: { id } });
        if (!financialPeriod) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        financialPeriod.deletedBy = userId;
        financialPeriod.deletedAt = new Date();

        return this.financialPeriodRepo.save(financialPeriod);
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Repository } from 'typeorm';
import { Currency } from './entities/currency.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { CURRENCY_FIELDS } from './query/currency-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CurrencyMapper } from './mapper/currency.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(Currency)
        private currencyRepo: Repository<Currency>,
    ) {}

    async create(data: CreateCurrencyDto) {
        return this.currencyRepo.save(
            this.currencyRepo.create({
                code: data.code,
                name: data.name,
                country: { id: data.countryId } as Country,
            }),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.currencyRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.country', 'country');

        const selectColumns = Object.values(CURRENCY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, CURRENCY_FIELDS);
        return {
            data: CurrencyMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const currency = await this.currencyRepo.findOne({
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
                country: true,
            },
        });
        if (!currency) throw new NotFoundException();
        return CurrencyMapper.toResponse(currency);
    }

    async update(id: number, data: UpdateCurrencyDto) {
        const currency = await this.currencyRepo.findOne({ where: { id } });
        if (!currency)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(currency, data);
        return this.currencyRepo.save(currency);
    }

    async delete(id: number) {
        const currency = await this.currencyRepo.findOne({ where: { id } });
        if (!currency)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        currency.deletedBy = userId;
        currency.deletedAt = new Date();

        return this.currencyRepo.save(currency);
    }

    async findOptions() {
        const currency = await this.currencyRepo.find();
        return LookupMapper.toResponses(
            currency,
            (currency) => currency.id,
            (currency) => `${currency.name} (${currency.code})`,
        );
    }
}

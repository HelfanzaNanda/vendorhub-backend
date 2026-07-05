import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTelcoPrefixDto } from './dto/create-telco-prefix.dto';
import { UpdateTelcoPrefixDto } from './dto/update-telco-prefix.dto';
import { Repository } from 'typeorm';
import { TelcoPrefix } from './entities/telco-prefix.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { TELCO_PREFIX_FIELDS } from './query/telco-prefix-field.meta';
import { RequestContext } from '@common/context/request-context';
import { TelcoPrefixMapper } from './mapper/telco-prefix.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class TelcoPrefixService {
    constructor(
        @InjectRepository(TelcoPrefix)
        private telcoPrefixRepo: Repository<TelcoPrefix>,
    ) {}

    async create(data: CreateTelcoPrefixDto) {
        return this.telcoPrefixRepo.save(this.telcoPrefixRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.telcoPrefixRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(TELCO_PREFIX_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, TELCO_PREFIX_FIELDS);
        return {
            data: TelcoPrefixMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const telcoPrefix = await this.telcoPrefixRepo.findOne({
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
        if (!telcoPrefix) throw new NotFoundException();
        return TelcoPrefixMapper.toResponse(telcoPrefix);
    }

    async update(id: number, data: UpdateTelcoPrefixDto) {
        const telcoPrefix = await this.telcoPrefixRepo.findOne({
            where: { id },
        });
        if (!telcoPrefix)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(telcoPrefix, data);
        return this.telcoPrefixRepo.save(telcoPrefix);
    }

    async delete(id: number) {
        const telcoPrefix = await this.telcoPrefixRepo.findOne({
            where: { id },
        });
        if (!telcoPrefix)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        telcoPrefix.deletedBy = userId;
        telcoPrefix.deletedAt = new Date();

        return this.telcoPrefixRepo.save(telcoPrefix);
    }

    async findOptions() {
        const telcoPrefix = await this.telcoPrefixRepo.find();
        return LookupMapper.toResponses(
            telcoPrefix,
            (telcoPrefix) => telcoPrefix.id,
            (telcoPrefix) => telcoPrefix.name,
        );
    }
}

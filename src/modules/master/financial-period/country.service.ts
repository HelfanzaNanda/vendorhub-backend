import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Repository } from 'typeorm';
import { Country } from './entities/financial-period.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { COUNTRY_FIELDS } from './query/country-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CountryMapper } from './mapper/country.mapper';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private countryRepo: Repository<Country>
    ) { }

    async create(data : CreateCountryDto) {
        return this.countryRepo.save(this.countryRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.countryRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(COUNTRY_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, COUNTRY_FIELDS);
        return {
            data : CountryMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const country = await this.countryRepo.findOne({ 
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
        if (!country) throw new NotFoundException();
        return CountryMapper.toResponse(country);
    }

    async update(id: number, data : UpdateCountryDto) {
        const country = await this.countryRepo.findOne({ where: { id } });
        if (!country) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(country, data);
        return this.countryRepo.save(country);
    }

    async delete(id: number) {
        const country = await this.countryRepo.findOne({ where: { id } });
        if (!country) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        country.deletedBy = userId;
        country.deletedAt = new Date();

        return this.countryRepo.save(country);
    }
}
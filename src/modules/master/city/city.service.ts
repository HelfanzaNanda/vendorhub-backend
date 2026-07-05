import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { CITY_FIELDS } from './query/city-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CityMapper } from './mapper/city.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private cityRepo: Repository<City>,
    ) {}

    async create(data: CreateCityDto) {
        return this.cityRepo.save(
            this.cityRepo.create({
                name: data.name,
                province: { id: data.provinceId } as Province,
            }),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.cityRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.province', 'province');

        const selectColumns = Object.values(CITY_FIELDS).map((f) => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, CITY_FIELDS);
        return {
            data: CityMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const city = await this.cityRepo.findOne({
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
                province: true,
            },
        });
        if (!city) throw new NotFoundException();
        return CityMapper.toResponse(city);
    }

    async update(id: number, data: UpdateCityDto) {
        const city = await this.cityRepo.findOne({ where: { id } });
        if (!city) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(city, data);
        return this.cityRepo.save(city);
    }

    async delete(id: number) {
        const city = await this.cityRepo.findOne({ where: { id } });
        if (!city) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        city.deletedBy = userId;
        city.deletedAt = new Date();

        return this.cityRepo.save(city);
    }

    async findOptions(provinceId: number) {
        const city = await this.cityRepo.find({
            where: {
                province: {
                    id: provinceId,
                },
            },
        });
        return LookupMapper.toResponses(
            city,
            (city) => city.id,
            (city) => city.name,
        );
    }
}

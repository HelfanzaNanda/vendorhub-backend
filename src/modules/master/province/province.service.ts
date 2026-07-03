import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';
import { Country } from "@modules/master/country/entities/country.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { PROVINCE_FIELDS } from './query/province-field.meta';
import { RequestContext } from '@common/context/request-context';
import { ProvinceMapper } from './mapper/province.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class ProvinceService {
    constructor(
        @InjectRepository(Province)
        private provinceRepo: Repository<Province>
    ) { }

    async create(data: CreateProvinceDto) {
        return this.provinceRepo.save(this.provinceRepo.create({
            name: data.name,
            country: { id: data.countryId } as Country,
        }));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.provinceRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.country', 'country');

        const selectColumns = Object.values(PROVINCE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, PROVINCE_FIELDS);
        return {
            data: ProvinceMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const province = await this.provinceRepo.findOne({
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
                country: true
            }
        });
        if (!province) throw new NotFoundException();
        return ProvinceMapper.toResponse(province);
    }

    async update(id: number, data: UpdateProvinceDto) {
        const province = await this.provinceRepo.findOne({ where: { id } });
        if (!province) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(province, data);
        return this.provinceRepo.save(province);
    }

    async delete(id: number) {
        const province = await this.provinceRepo.findOne({ where: { id } });
        if (!province) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        province.deletedBy = userId;
        province.deletedAt = new Date();

        return this.provinceRepo.save(province);
    }

    async findOptions(countryId: number) {
        const province = await this.provinceRepo.find({
            where : {
                country : {
                    id : countryId
                }
            }
        });
        return LookupMapper.toResponses(
            province, 
            province => province.id,
            province => province.name
        );
    }
}

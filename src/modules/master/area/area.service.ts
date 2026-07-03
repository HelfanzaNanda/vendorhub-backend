import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { AREA_FIELDS } from './query/area-field.meta';
import { RequestContext } from '@common/context/request-context';
import { AreaMapper } from './mapper/area.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(Area)
        private areaRepo: Repository<Area>
    ) { }

    async create(data : CreateAreaDto) {
        return this.areaRepo.save(this.areaRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.areaRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(AREA_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, AREA_FIELDS);
        return {
            data : AreaMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const area = await this.areaRepo.findOne({ 
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
        if (!area) throw new NotFoundException();
        return AreaMapper.toResponse(area);
    }

    async update(id: number, data : UpdateAreaDto) {
        const area = await this.areaRepo.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(area, data);
        return this.areaRepo.save(area);
    }

    async delete(id: number) {
        const area = await this.areaRepo.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        area.deletedBy = userId;
        area.deletedAt = new Date();

        return this.areaRepo.save(area);
    }
    
    async findOptions() {
        const area = await this.areaRepo.find();
        return LookupMapper.toResponses(
            area, 
            area => area.id,
            area => area.name
        );
    }
}
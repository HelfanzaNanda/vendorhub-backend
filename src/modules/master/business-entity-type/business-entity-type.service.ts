import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessEntityTypeDto } from './dto/create-business-entity-type.dto';
import { UpdateBusinessEntityTypeDto } from './dto/update-business-entity-type.dto';
import { Repository } from 'typeorm';
import { BusinessEntityType } from './entities/business-entity-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { BUSINESS_ENTITY_TYPE_FIELDS } from './query/business-entity-type-field.meta';
import { RequestContext } from '@common/context/request-context';
import { BusinessEntityTypeMapper } from './mapper/business-entity-type.mapper';

@Injectable()
export class BusinessEntityTypeService {
    constructor(
        @InjectRepository(BusinessEntityType)
        private businessEntityTypeRepo: Repository<BusinessEntityType>
    ) { }

    async create(data: CreateBusinessEntityTypeDto) {
        return this.businessEntityTypeRepo.save(this.businessEntityTypeRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.businessEntityTypeRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(BUSINESS_ENTITY_TYPE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, BUSINESS_ENTITY_TYPE_FIELDS);
        return {
            data: BusinessEntityTypeMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const businessEntityType = await this.businessEntityTypeRepo.findOne({
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
        if (!businessEntityType) throw new NotFoundException();
        return BusinessEntityTypeMapper.toResponse(businessEntityType);
    }

    async update(id: number, data: UpdateBusinessEntityTypeDto) {
        const businessEntityType = await this.businessEntityTypeRepo.findOne({ where: { id } });
        if (!businessEntityType) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(businessEntityType, data);
        return this.businessEntityTypeRepo.save(businessEntityType);
    }

    async delete(id: number) {
        const businessEntityType = await this.businessEntityTypeRepo.findOne({ where: { id } });
        if (!businessEntityType) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        businessEntityType.deletedBy = userId;
        businessEntityType.deletedAt = new Date();

        return this.businessEntityTypeRepo.save(businessEntityType);
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyPersonnelTypeDto } from './dto/create-company-personnel-type.dto';
import { UpdateCompanyPersonnelTypeDto } from './dto/update-company-personnel-type.dto';
import { Repository } from 'typeorm';
import { CompanyPersonnelType } from './entities/company-personnel-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { COMPANY_PERSONNEL_TYPE_FIELDS } from './query/company-personnel-type-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CompanyPersonnelTypeMapper } from './mapper/company-personnel-type.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class CompanyPersonnelTypeService {
    constructor(
        @InjectRepository(CompanyPersonnelType)
        private repo: Repository<CompanyPersonnelType>
    ) { }

    async create(data: CreateCompanyPersonnelTypeDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(COMPANY_PERSONNEL_TYPE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, COMPANY_PERSONNEL_TYPE_FIELDS);
        return {
            data: CompanyPersonnelTypeMapper.toResponses(result.data),
            meta: result.meta
        };
    }

    async findOne(id: number) {
        const item = await this.repo.findOne({ 
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
        if (!item) throw new NotFoundException();
        return CompanyPersonnelTypeMapper.toResponse(item);
    }

    async update(id: number, data: UpdateCompanyPersonnelTypeDto) {
        const item = await this.repo.findOne({ where: { id } });
        if (!item) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(item, data);
        return this.repo.save(item);
    }

    async delete(id: number) {
        const item = await this.repo.findOne({ where: { id } });
        if (!item) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        item.deletedBy = userId;
        item.deletedAt = new Date();

        return this.repo.save(item);
    }

    async findOptions() {
        const items = await this.repo.find();
        return LookupMapper.toResponses(
            items, 
            i => i.id,
            i => i.name
        );
    }
}

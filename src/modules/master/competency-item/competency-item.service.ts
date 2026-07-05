import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompetencyItemDto } from './dto/create-competency-item.dto';
import { UpdateCompetencyItemDto } from './dto/update-competency-item.dto';
import { Repository } from 'typeorm';
import { CompetencyItem } from './entities/competency-item.entity';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { COMPETENCY_ITEM_FIELDS } from './query/competency-item-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CompetencyItemMapper } from './mapper/competency-item.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class CompetencyItemService {
    constructor(
        @InjectRepository(CompetencyItem)
        private competencyItemRepo: Repository<CompetencyItem>,
    ) {}

    async create(data: CreateCompetencyItemDto) {
        return this.competencyItemRepo.save(
            this.competencyItemRepo.create({
                code: data.code,
                name: data.name,
                description: data.description,
                competencySubCategory: {
                    id: data.competencySubCategoryId,
                } as CompetencySubCategory,
            }),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.competencyItemRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect(
            'c.competencySubCategory',
            'competencySubCategory',
        );

        const selectColumns = Object.values(COMPETENCY_ITEM_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, COMPETENCY_ITEM_FIELDS);
        return {
            data: CompetencyItemMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const competencyItem = await this.competencyItemRepo.findOne({
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
                competencySubCategory: true,
            },
        });
        if (!competencyItem) throw new NotFoundException();
        return CompetencyItemMapper.toResponse(competencyItem);
    }

    async update(id: number, data: UpdateCompetencyItemDto) {
        const competencyItem = await this.competencyItemRepo.findOne({
            where: { id },
        });
        if (!competencyItem)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(competencyItem, data);
        return this.competencyItemRepo.save(competencyItem);
    }

    async delete(id: number) {
        const competencyItem = await this.competencyItemRepo.findOne({
            where: { id },
        });
        if (!competencyItem)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        competencyItem.deletedBy = userId;
        competencyItem.deletedAt = new Date();

        return this.competencyItemRepo.save(competencyItem);
    }

    async findOptions(industryClassificationId: number) {
        const competencyItem = await this.competencyItemRepo.find();
        return LookupMapper.toResponses(
            competencyItem,
            (competencyItem) => competencyItem.id,
            (competencyItem) => competencyItem.name,
        );
    }
}

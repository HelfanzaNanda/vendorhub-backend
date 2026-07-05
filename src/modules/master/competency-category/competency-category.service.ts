import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompetencyCategoryDto } from './dto/create-competency-category.dto';
import { UpdateCompetencyCategoryDto } from './dto/update-competency-category.dto';
import { Repository } from 'typeorm';
import { CompetencyCategory } from './entities/competency-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { COMPETENCY_CATEGORY_FIELDS } from './query/competency-category-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CompetencyCategoryMapper } from './mapper/competency-category.mapper';

@Injectable()
export class CompetencyCategoryService {
    constructor(
        @InjectRepository(CompetencyCategory)
        private competencyCategoryRepo: Repository<CompetencyCategory>,
    ) {}

    async create(data: CreateCompetencyCategoryDto) {
        return this.competencyCategoryRepo.save(
            this.competencyCategoryRepo.create(data),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.competencyCategoryRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(COMPETENCY_CATEGORY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, COMPETENCY_CATEGORY_FIELDS);
        return {
            data: CompetencyCategoryMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const competencyCategory = await this.competencyCategoryRepo.findOne({
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
        if (!competencyCategory) throw new NotFoundException();
        return CompetencyCategoryMapper.toResponse(competencyCategory);
    }

    async update(id: number, data: UpdateCompetencyCategoryDto) {
        const competencyCategory = await this.competencyCategoryRepo.findOne({
            where: { id },
        });
        if (!competencyCategory)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(competencyCategory, data);
        return this.competencyCategoryRepo.save(competencyCategory);
    }

    async delete(id: number) {
        const competencyCategory = await this.competencyCategoryRepo.findOne({
            where: { id },
        });
        if (!competencyCategory)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        competencyCategory.deletedBy = userId;
        competencyCategory.deletedAt = new Date();

        return this.competencyCategoryRepo.save(competencyCategory);
    }
}

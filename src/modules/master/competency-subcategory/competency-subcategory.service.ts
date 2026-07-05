import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompetencySubCategoryDto } from './dto/create-competency-subcategory.dto';
import { UpdateCompetencySubCategoryDto } from './dto/update-competency-subcategory.dto';
import { Repository } from 'typeorm';
import { CompetencySubCategory } from './entities/competency-subcategory.entity';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { COMPETENCY_SUBCATEGORY_FIELDS } from './query/competency-subcategory-field.meta';
import { RequestContext } from '@common/context/request-context';
import { CompetencySubCategoryMapper } from './mapper/competency-subcategory.mapper';

@Injectable()
export class CompetencySubCategoryService {
    constructor(
        @InjectRepository(CompetencySubCategory)
        private competencySubCategoryRepo: Repository<CompetencySubCategory>,
    ) {}

    async create(data: CreateCompetencySubCategoryDto) {
        return this.competencySubCategoryRepo.save(
            this.competencySubCategoryRepo.create({
                name: data.name,
                competencyCategory: {
                    id: data.competencyCategoryId,
                } as CompetencyCategory,
            }),
        );
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.competencySubCategoryRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.competencyCategory', 'competencyCategory');

        const selectColumns = Object.values(COMPETENCY_SUBCATEGORY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, COMPETENCY_SUBCATEGORY_FIELDS);
        return {
            data: CompetencySubCategoryMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const competencySubCategory =
            await this.competencySubCategoryRepo.findOne({
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
                    competencyCategory: true,
                },
            });
        if (!competencySubCategory) throw new NotFoundException();
        return CompetencySubCategoryMapper.toResponse(competencySubCategory);
    }

    async update(id: number, data: UpdateCompetencySubCategoryDto) {
        const competencySubCategory =
            await this.competencySubCategoryRepo.findOne({ where: { id } });
        if (!competencySubCategory)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(competencySubCategory, data);
        return this.competencySubCategoryRepo.save(competencySubCategory);
    }

    async delete(id: number) {
        const competencySubCategory =
            await this.competencySubCategoryRepo.findOne({ where: { id } });
        if (!competencySubCategory)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        competencySubCategory.deletedBy = userId;
        competencySubCategory.deletedAt = new Date();

        return this.competencySubCategoryRepo.save(competencySubCategory);
    }
}

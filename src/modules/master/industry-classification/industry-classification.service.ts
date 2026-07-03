import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIndustryClassificationDto } from './dto/create-industry-classification.dto';
import { UpdateIndustryClassificationDto } from './dto/update-industry-classification.dto';
import { Repository } from 'typeorm';
import { IndustryClassification } from './entities/industry-classification.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { INDUSTRY_CLASSIFICATION_FIELDS } from './query/industry-classification-field.meta';
import { RequestContext } from '@common/context/request-context';
import { IndustryClassificationMapper } from './mapper/industry-classification.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class IndustryClassificationService {
    constructor(
        @InjectRepository(IndustryClassification)
        private industryClassificationRepo: Repository<IndustryClassification>
    ) { }

    async create(data: CreateIndustryClassificationDto) {
        return this.industryClassificationRepo.save(this.industryClassificationRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.industryClassificationRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(INDUSTRY_CLASSIFICATION_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, INDUSTRY_CLASSIFICATION_FIELDS);
        return {
            data: IndustryClassificationMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const industryClassification = await this.industryClassificationRepo.findOne({
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
        if (!industryClassification) throw new NotFoundException();
        return IndustryClassificationMapper.toResponse(industryClassification);
    }

    async update(id: number, data: UpdateIndustryClassificationDto) {
        const industryClassification = await this.industryClassificationRepo.findOne({ where: { id } });
        if (!industryClassification) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(industryClassification, data);
        return this.industryClassificationRepo.save(industryClassification);
    }

    async delete(id: number) {
        const industryClassification = await this.industryClassificationRepo.findOne({ where: { id } });
        if (!industryClassification) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        industryClassification.deletedBy = userId;
        industryClassification.deletedAt = new Date();

        return this.industryClassificationRepo.save(industryClassification);
    }

    async findOptions() {
        const industryClassification = await this.industryClassificationRepo.find();
        return LookupMapper.toResponses(
            industryClassification, 
            industryClassification => industryClassification.id,
            industryClassification => industryClassification.number,
            industryClassification => ({
                name : industryClassification.name,
                description : industryClassification.description,
            })
        );
    }
}

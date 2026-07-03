import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';
import { TermsConditionItem } from './entities/terms-condition-item.entity';
import { CreateTermsConditionItemDto } from './dto/create-terms-condition-item.dto';
import { TERMS_CONDITION_ITEM_FIELDS } from './query/terms-condition-item-field.meta';
import { TermsConditionItemMapper } from './mapper/terms-condition-item.mapper';
import { UpdateTermsConditionItemDto } from './dto/update-terms-condition-item.dto';

@Injectable()
export class TermsConditionItemService {
    constructor(
        @InjectRepository(TermsConditionItem)
        private termsConditionItemRepo: Repository<TermsConditionItem>
    ) { }

    async create(data : CreateTermsConditionItemDto) {
        return this.termsConditionItemRepo.save(this.termsConditionItemRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.termsConditionItemRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(TERMS_CONDITION_ITEM_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, TERMS_CONDITION_ITEM_FIELDS);
        return {
            data : TermsConditionItemMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const area = await this.termsConditionItemRepo.findOne({ 
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
        return TermsConditionItemMapper.toResponse(area);
    }

    async update(id: number, data : UpdateTermsConditionItemDto) {
        const area = await this.termsConditionItemRepo.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(area, data);
        return this.termsConditionItemRepo.save(area);
    }

    async delete(id: number) {
        const area = await this.termsConditionItemRepo.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        area.deletedBy = userId;
        area.deletedAt = new Date();

        return this.termsConditionItemRepo.save(area);
    }
    
    // async findOptions() {
    //     const area = await this.termsConditionItemRepo.find();
    //     return LookupMapper.toResponses(
    //         area, 
    //         area => area.id,
    //         area => area.name
    //     );
    // }
}
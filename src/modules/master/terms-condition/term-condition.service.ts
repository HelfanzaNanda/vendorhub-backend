import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTermsConditionDto } from './dto/create-term-condition.dto';
import { UpdateTermsConditionDto } from './dto/update-term-condition.dto';
import { Repository } from 'typeorm';
import { TermsCondition } from './entities/term-condition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { AREA_FIELDS } from './query/term-condition-field.meta';
import { RequestContext } from '@common/context/request-context';
import { TermsConditionMapper } from './mapper/term-condition.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class TermsConditionService {
    constructor(
        @InjectRepository(TermsCondition)
        private termsConditon: Repository<TermsCondition>
    ) { }

    async create(data : CreateTermsConditionDto) {
        return this.termsConditon.save(this.termsConditon.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.termsConditon.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(AREA_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, AREA_FIELDS);
        return {
            data : TermsConditionMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async latest() {
        const terms = await this.termsConditon.findOne({
            select : {
                id : true,
                title : true,
                createdAt : true,
                items : {
                    id : true,
                    termsCondition : {
                        id : true,
                    },
                    chapter : true,
                    title : true,
                    content : true,
                    sortOrder : true,
                    approvalMode : true
                }
            },
            where : {
                status : true
            },
            relations : {
                items: true
            },
            order : {
                createdAt : 'DESC'
            },
        });
        if (!terms) throw new NotFoundException();
        return terms;
    }

    async findOne(id: number) {
        const area = await this.termsConditon.findOne({ 
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
        return TermsConditionMapper.toResponse(area);
    }

    async update(id: number, data : UpdateTermsConditionDto) {
        const area = await this.termsConditon.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(area, data);
        return this.termsConditon.save(area);
    }

    async delete(id: number) {
        const area = await this.termsConditon.findOne({ where: { id } });
        if (!area) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        area.deletedBy = userId;
        area.deletedAt = new Date();

        return this.termsConditon.save(area);
    }
    
    // async findOptions() {
    //     const area = await this.termsConditon.find();
    //     return LookupMapper.toResponses(
    //         area, 
    //         area => area.id,
    //         area => area.name
    //     );
    // }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAffiliateTypeDto } from './dto/create-affiliate-type.dto';
import { Repository } from 'typeorm';
import { AffiliateType } from './entities/affiliate-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { AffiliateTypeMapper } from './mapper/affiliate-type.mapper';
import { AFFILIATE_TYPE_FIELDS } from './query/affiliate-type-field.meta';
import { UpdateAffiliateTypeDto } from './dto/update-affiliate-type.dto';

@Injectable()
export class AffiliateTypeService {
    constructor(
        @InjectRepository(AffiliateType)
        private affiliateRepo: Repository<AffiliateType>
    ) { }

    async create(data : CreateAffiliateTypeDto) {
        return this.affiliateRepo.save(this.affiliateRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.affiliateRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(AFFILIATE_TYPE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, AFFILIATE_TYPE_FIELDS);
        return {
            data : AffiliateTypeMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const affiliateType = await this.affiliateRepo.findOne({ 
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
        if (!affiliateType) throw new NotFoundException();
        return AffiliateTypeMapper.toResponse(affiliateType);
    }

    async update(id: number, data : UpdateAffiliateTypeDto) {
        const affiliateType = await this.affiliateRepo.findOne({ where: { id } });
        if (!affiliateType) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(affiliateType, data);
        return this.affiliateRepo.save(affiliateType);
    }

    async delete(id: number) {
        const affiliateType = await this.affiliateRepo.findOne({ where: { id } });
        if (!affiliateType) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        affiliateType.deletedBy = userId;
        affiliateType.deletedAt = new Date();

        return this.affiliateRepo.save(affiliateType);
    }
}
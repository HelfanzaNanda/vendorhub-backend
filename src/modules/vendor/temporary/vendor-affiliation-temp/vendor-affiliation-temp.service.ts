import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorAffiliationTempDto } from './dto/create-vendor-affiliation-temp.dto';
import { UpdateVendorAffiliationTempDto } from './dto/update-vendor-affiliation-temp.dto';
import { Repository } from 'typeorm';
import { VendorAffiliationTemp } from './entities/vendor-affiliation-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORAFFILIATIONTEMP_FIELDS } from './query/vendor-affiliation-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorAffiliationTempMapper } from './mapper/vendor-affiliation-temp.mapper';

@Injectable()
export class VendorAffiliationTempService {
    constructor(
        @InjectRepository(VendorAffiliationTemp)
        private repo: Repository<VendorAffiliationTemp>
    ) { }

    async create(data: CreateVendorAffiliationTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorAffiliation', 'vendorAffiliation');
        qb.leftJoinAndSelect('c.affiliateType', 'affiliateType');
        qb.leftJoinAndSelect('c.companyBusinessEntityType', 'companyBusinessEntityType');
        
        const selectColumns = Object.values(VENDORAFFILIATIONTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORAFFILIATIONTEMP_FIELDS);
        return {
            data: VendorAffiliationTempMapper.toResponses(result.data),
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
                updatedByUser: true,
                vendorTemp: true,
                vendorAffiliation: true,
                affiliateType: true,
                companyBusinessEntityType: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorAffiliationTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorAffiliationTempDto) {
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
}

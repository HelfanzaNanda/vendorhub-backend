import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorPersonnelTempDto } from './dto/create-vendor-personnel-temp.dto';
import { UpdateVendorPersonnelTempDto } from './dto/update-vendor-personnel-temp.dto';
import { Repository } from 'typeorm';
import { VendorPersonnelTemp } from './entities/vendor-personnel-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORPERSONNELTEMP_FIELDS } from './query/vendor-personnel-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorPersonnelTempMapper } from './mapper/vendor-personnel-temp.mapper';

@Injectable()
export class VendorPersonnelTempService {
    constructor(
        @InjectRepository(VendorPersonnelTemp)
        private repo: Repository<VendorPersonnelTemp>
    ) { }

    async create(data: CreateVendorPersonnelTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorPersonnel', 'vendorPersonnel');
        qb.leftJoinAndSelect('c.personnelType', 'personnelType');
        qb.leftJoinAndSelect('c.title', 'title');
        qb.leftJoinAndSelect('c.jobType', 'jobType');
        qb.leftJoinAndSelect('c.identityType', 'identityType');
        
        const selectColumns = Object.values(VENDORPERSONNELTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORPERSONNELTEMP_FIELDS);
        return {
            data: VendorPersonnelTempMapper.toResponses(result.data),
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
                vendorPersonnel: true,
                personnelType: true,
                title: true,
                jobType: true,
                identityType: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorPersonnelTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorPersonnelTempDto) {
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

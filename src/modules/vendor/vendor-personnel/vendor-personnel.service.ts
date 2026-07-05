import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorPersonnelDto } from './dto/create-vendor-personnel.dto';
import { UpdateVendorPersonnelDto } from './dto/update-vendor-personnel.dto';
import { Repository } from 'typeorm';
import { VendorPersonnel } from './entities/vendor-personnel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORPERSONNEL_FIELDS } from './query/vendor-personnel-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorPersonnelMapper } from './mapper/vendor-personnel.mapper';

@Injectable()
export class VendorPersonnelService {
    constructor(
        @InjectRepository(VendorPersonnel)
        private repo: Repository<VendorPersonnel>,
    ) {}

    async create(data: CreateVendorPersonnelDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.personnelType', 'personnelType');
        qb.leftJoinAndSelect('c.title', 'title');
        qb.leftJoinAndSelect('c.jobType', 'jobType');
        qb.leftJoinAndSelect('c.identityType', 'identityType');

        const selectColumns = Object.values(VENDORPERSONNEL_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORPERSONNEL_FIELDS);
        return {
            data: VendorPersonnelMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const item = await this.repo.findOne({
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
                vendor: true,
                personnelType: true,
                title: true,
                jobType: true,
                identityType: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorPersonnelMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorPersonnelDto) {
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

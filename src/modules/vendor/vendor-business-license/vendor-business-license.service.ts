import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBusinessLicenseDto } from './dto/create-vendor-business-license.dto';
import { UpdateVendorBusinessLicenseDto } from './dto/update-vendor-business-license.dto';
import { Repository } from 'typeorm';
import { VendorBusinessLicense } from './entities/vendor-business-license.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBUSINESSLICENSE_FIELDS } from './query/vendor-business-license-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorBusinessLicenseMapper } from './mapper/vendor-business-license.mapper';

@Injectable()
export class VendorBusinessLicenseService {
    constructor(
        @InjectRepository(VendorBusinessLicense)
        private repo: Repository<VendorBusinessLicense>,
    ) {}

    async create(data: CreateVendorBusinessLicenseDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.file', 'file');

        const selectColumns = Object.values(VENDORBUSINESSLICENSE_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORBUSINESSLICENSE_FIELDS);
        return {
            data: VendorBusinessLicenseMapper.toResponses(result.data),
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
                file: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorBusinessLicenseMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorBusinessLicenseDto) {
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

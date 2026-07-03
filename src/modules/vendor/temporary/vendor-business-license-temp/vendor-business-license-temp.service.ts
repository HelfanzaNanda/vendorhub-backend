import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBusinessLicenseTempDto } from './dto/create-vendor-business-license-temp.dto';
import { UpdateVendorBusinessLicenseTempDto } from './dto/update-vendor-business-license-temp.dto';
import { Repository } from 'typeorm';
import { VendorBusinessLicenseTemp } from './entities/vendor-business-license-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBUSINESSLICENSETEMP_FIELDS } from './query/vendor-business-license-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorBusinessLicenseTempMapper } from './mapper/vendor-business-license-temp.mapper';

@Injectable()
export class VendorBusinessLicenseTempService {
    constructor(
        @InjectRepository(VendorBusinessLicenseTemp)
        private repo: Repository<VendorBusinessLicenseTemp>
    ) { }

    async create(data: CreateVendorBusinessLicenseTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorBusinessLicense', 'vendorBusinessLicense');
        qb.leftJoinAndSelect('c.file', 'file');
        
        const selectColumns = Object.values(VENDORBUSINESSLICENSETEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORBUSINESSLICENSETEMP_FIELDS);
        return {
            data: VendorBusinessLicenseTempMapper.toResponses(result.data),
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
                vendorBusinessLicense: true,
                file: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorBusinessLicenseTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorBusinessLicenseTempDto) {
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorFinancialReportTempDto } from './dto/create-vendor-financial-report-temp.dto';
import { UpdateVendorFinancialReportTempDto } from './dto/update-vendor-financial-report-temp.dto';
import { Repository } from 'typeorm';
import { VendorFinancialReportTemp } from './entities/vendor-financial-report-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORFINANCIALREPORTTEMP_FIELDS } from './query/vendor-financial-report-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorFinancialReportTempMapper } from './mapper/vendor-financial-report-temp.mapper';

@Injectable()
export class VendorFinancialReportTempService {
    constructor(
        @InjectRepository(VendorFinancialReportTemp)
        private repo: Repository<VendorFinancialReportTemp>
    ) { }

    async create(data: CreateVendorFinancialReportTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorFinancialReport', 'vendorFinancialReport');
        qb.leftJoinAndSelect('c.file', 'file');
        qb.leftJoinAndSelect('c.currency', 'currency');
        
        const selectColumns = Object.values(VENDORFINANCIALREPORTTEMP_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORFINANCIALREPORTTEMP_FIELDS);
        return {
            data: VendorFinancialReportTempMapper.toResponses(result.data),
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
                vendorFinancialReport: true,
                file: true,
                currency: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorFinancialReportTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorFinancialReportTempDto) {
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

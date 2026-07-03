import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorFinancialReportDto } from './dto/create-vendor-financial-report.dto';
import { UpdateVendorFinancialReportDto } from './dto/update-vendor-financial-report.dto';
import { Repository } from 'typeorm';
import { VendorFinancialReport } from './entities/vendor-financial-report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORFINANCIALREPORT_FIELDS } from './query/vendor-financial-report-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorFinancialReportMapper } from './mapper/vendor-financial-report.mapper';

@Injectable()
export class VendorFinancialReportService {
    constructor(
        @InjectRepository(VendorFinancialReport)
        private repo: Repository<VendorFinancialReport>
    ) { }

    async create(data: CreateVendorFinancialReportDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.file', 'file');
        qb.leftJoinAndSelect('c.currency', 'currency');
        
        const selectColumns = Object.values(VENDORFINANCIALREPORT_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORFINANCIALREPORT_FIELDS);
        return {
            data: VendorFinancialReportMapper.toResponses(result.data),
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
                vendor: true,
                file: true,
                currency: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorFinancialReportMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorFinancialReportDto) {
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

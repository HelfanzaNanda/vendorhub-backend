import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDocumentTempDto } from './dto/create-vendor-document-temp.dto';
import { UpdateVendorDocumentTempDto } from './dto/update-vendor-document-temp.dto';
import { Repository } from 'typeorm';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORDOCUMENTTEMP_FIELDS } from './query/vendor-document-temp-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorDocumentTempMapper } from './mapper/vendor-document-temp.mapper';

@Injectable()
export class VendorDocumentTempService {
    constructor(
        @InjectRepository(VendorDocumentTemp)
        private repo: Repository<VendorDocumentTemp>,
    ) {}

    async create(data: CreateVendorDocumentTempDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendorTemp', 'vendorTemp');
        qb.leftJoinAndSelect('c.vendorDocument', 'vendorDocument');
        qb.leftJoinAndSelect('c.documentType', 'documentType');
        qb.leftJoinAndSelect('c.file', 'file');

        const selectColumns = Object.values(VENDORDOCUMENTTEMP_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);

        const result = await paginate(qb, query, VENDORDOCUMENTTEMP_FIELDS);
        return {
            data: VendorDocumentTempMapper.toResponses(result.data),
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
                vendorTemp: true,
                vendorDocument: true,
                documentType: true,
                file: true,
            },
        });
        if (!item) throw new NotFoundException();
        return VendorDocumentTempMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorDocumentTempDto) {
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

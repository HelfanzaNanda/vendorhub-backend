import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDocumentDto } from './dto/create-vendor-document.dto';
import { UpdateVendorDocumentDto } from './dto/update-vendor-document.dto';
import { Repository } from 'typeorm';
import { VendorDocument } from './entities/vendor-document.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORDOCUMENT_FIELDS } from './query/vendor-document-field.meta';
import { RequestContext } from '@common/context/request-context';
import { VendorDocumentMapper } from './mapper/vendor-document.mapper';

@Injectable()
export class VendorDocumentService {
    constructor(
        @InjectRepository(VendorDocument)
        private repo: Repository<VendorDocument>
    ) { }

    async create(data: CreateVendorDocumentDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        qb.leftJoinAndSelect('c.vendor', 'vendor');
        qb.leftJoinAndSelect('c.documentType', 'documentType');
        qb.leftJoinAndSelect('c.file', 'file');
        
        const selectColumns = Object.values(VENDORDOCUMENT_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        
        const result = await paginate(qb, query, VENDORDOCUMENT_FIELDS);
        return {
            data: VendorDocumentMapper.toResponses(result.data),
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
                documentType: true,
                file: true,
            }
        });
        if (!item) throw new NotFoundException();
        return VendorDocumentMapper.toResponse(item);
    }

    async update(id: number, data: UpdateVendorDocumentDto) {
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

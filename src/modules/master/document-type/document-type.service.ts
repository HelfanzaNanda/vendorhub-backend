import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { Repository } from 'typeorm';
import { DocumentType } from './entities/document-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { DOCUMENT_TYPE_FIELDS } from './query/document-type-field.meta';
import { RequestContext } from '@common/context/request-context';
import { DocumentTypeMapper } from './mapper/document-type.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class DocumentTypeService {
    constructor(
        @InjectRepository(DocumentType)
        private repo: Repository<DocumentType>,
    ) {}

    async create(data: CreateDocumentTypeDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(DOCUMENT_TYPE_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, DOCUMENT_TYPE_FIELDS);
        return {
            data: DocumentTypeMapper.toResponses(result.data),
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
            },
        });
        if (!item) throw new NotFoundException();
        return DocumentTypeMapper.toResponse(item);
    }

    async update(id: number, data: UpdateDocumentTypeDto) {
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

    async findOptions() {
        const items = await this.repo.find();
        return LookupMapper.toResponses(
            items,
            (i) => i.id,
            (i) => i.name,
        );
    }
}

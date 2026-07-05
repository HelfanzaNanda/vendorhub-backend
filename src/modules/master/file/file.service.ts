import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { FILE_FIELDS } from './query/file-field.meta';
import { RequestContext } from '@common/context/request-context';
import { FileMapper } from './mapper/file.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File)
        private repo: Repository<File>,
    ) {}

    async create(data: CreateFileDto) {
        return this.repo.save(this.repo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.repo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(FILE_FIELDS).map((f) => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, FILE_FIELDS);
        return {
            data: FileMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const file = await this.repo.findOne({
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
        if (!file) throw new NotFoundException();
        return FileMapper.toResponse(file);
    }

    async update(id: number, data: UpdateFileDto) {
        const file = await this.repo.findOne({ where: { id } });
        if (!file) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(file, data);
        return this.repo.save(file);
    }

    async delete(id: number) {
        const file = await this.repo.findOne({ where: { id } });
        if (!file) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        file.deletedBy = userId;
        file.deletedAt = new Date();

        return this.repo.save(file);
    }

    async findOptions() {
        const files = await this.repo.find();
        return LookupMapper.toResponses(
            files,
            (f) => f.id,
            (f) => f.fileName,
        );
    }
}

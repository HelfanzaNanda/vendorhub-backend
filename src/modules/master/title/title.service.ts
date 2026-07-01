import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { Repository } from 'typeorm';
import { Title } from './entities/title.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { TITLE_FIELDS } from './query/title-field.meta';
import { RequestContext } from '@common/context/request-context';
import { TitleMapper } from './mapper/title.mapper';

@Injectable()
export class TitleService {
    constructor(
        @InjectRepository(Title)
        private titleRepo: Repository<Title>
    ) { }

    async create(data: CreateTitleDto) {
        return this.titleRepo.save(this.titleRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.titleRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(TITLE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, TITLE_FIELDS);
        return {
            data: TitleMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const title = await this.titleRepo.findOne({
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
                updatedByUser: true
            }
        });
        if (!title) throw new NotFoundException();
        return TitleMapper.toResponse(title);
    }

    async update(id: number, data: UpdateTitleDto) {
        const title = await this.titleRepo.findOne({ where: { id } });
        if (!title) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(title, data);
        return this.titleRepo.save(title);
    }

    async delete(id: number) {
        const title = await this.titleRepo.findOne({ where: { id } });
        if (!title) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        title.deletedBy = userId;
        title.deletedAt = new Date();

        return this.titleRepo.save(title);
    }
}

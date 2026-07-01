import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Repository } from 'typeorm';
import { Position } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { POSITION_FIELDS } from './query/position-field.meta';
import { RequestContext } from '@common/context/request-context';
import { PositionMapper } from './mapper/position.mapper';

@Injectable()
export class PositionService {
    constructor(
        @InjectRepository(Position)
        private positionRepo: Repository<Position>
    ) { }

    async create(data: CreatePositionDto) {
        return this.positionRepo.save(this.positionRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.positionRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(POSITION_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, POSITION_FIELDS);
        return {
            data: PositionMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const position = await this.positionRepo.findOne({
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
        if (!position) throw new NotFoundException();
        return PositionMapper.toResponse(position);
    }

    async update(id: number, data: UpdatePositionDto) {
        const position = await this.positionRepo.findOne({ where: { id } });
        if (!position) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(position, data);
        return this.positionRepo.save(position);
    }

    async delete(id: number) {
        const position = await this.positionRepo.findOne({ where: { id } });
        if (!position) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        position.deletedBy = userId;
        position.deletedAt = new Date();

        return this.positionRepo.save(position);
    }
}

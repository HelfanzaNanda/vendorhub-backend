import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterWorkingCalendar } from './entities/working-calendar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkingCalendarDto } from './dto/create-working-calendar.dto';
import { WORKING_CALENDAR_FIELDS } from './query/working-calendar-field.meta';
import { WorkingCalendarMapper } from './mapper/working-calendar.mapper';
import { UpdateWorkingCalendarDto } from './dto/update-working-calendar.dto';

@Injectable()
export class WorkingCalendarService {
    constructor(
        @InjectRepository(MasterWorkingCalendar)
        private workingCalendarRepo: Repository<MasterWorkingCalendar>,
    ) {}

    async create(data: CreateWorkingCalendarDto) {
        return this.workingCalendarRepo.save(this.workingCalendarRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workingCalendarRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKING_CALENDAR_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKING_CALENDAR_FIELDS);
        return {
            data: WorkingCalendarMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workingCalendar = await this.workingCalendarRepo.findOne({
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
        if (!workingCalendar) throw new NotFoundException();
        return WorkingCalendarMapper.toResponse(workingCalendar as any);
    }

    async update(id: number, data: UpdateWorkingCalendarDto) {
        const workingCalendar = await this.workingCalendarRepo.findOne({
            where: { id },
        });
        if (!workingCalendar)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workingCalendar, data);
        return this.workingCalendarRepo.save(workingCalendar);
    }

    async delete(id: number) {
        const workingCalendar = await this.workingCalendarRepo.findOne({
            where: { id },
        });
        if (!workingCalendar)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workingCalendar as any).deletedBy = userId;
        (workingCalendar as any).deletedAt = new Date();

        return this.workingCalendarRepo.save(workingCalendar);
    }
}

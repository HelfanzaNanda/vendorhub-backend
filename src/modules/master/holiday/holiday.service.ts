import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterHoliday } from './entities/holiday.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HOLIDAY_FIELDS } from './query/holiday-field.meta';
import { HolidayMapper } from './mapper/holiday.mapper';
import { UpdateHolidayDto } from './dto/update-holiday.dto';

@Injectable()
export class HolidayService {
    constructor(
        @InjectRepository(MasterHoliday)
        private holidayRepo: Repository<MasterHoliday>,
    ) {}

    async create(data: CreateHolidayDto) {
        return this.holidayRepo.save(this.holidayRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.holidayRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(HOLIDAY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, HOLIDAY_FIELDS);
        return {
            data: HolidayMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const holiday = await this.holidayRepo.findOne({
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
        if (!holiday) throw new NotFoundException();
        return HolidayMapper.toResponse(holiday as any);
    }

    async update(id: number, data: UpdateHolidayDto) {
        const holiday = await this.holidayRepo.findOne({
            where: { id },
        });
        if (!holiday)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(holiday, data);
        return this.holidayRepo.save(holiday);
    }

    async delete(id: number) {
        const holiday = await this.holidayRepo.findOne({
            where: { id },
        });
        if (!holiday)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (holiday as any).deletedBy = userId;
        (holiday as any).deletedAt = new Date();

        return this.holidayRepo.save(holiday);
    }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Repository } from "typeorm";
import { MasterHoliday } from "./entities/holiday.entity";

@Injectable()
export class HolidayRepository {
    constructor(
        @InjectRepository(MasterHoliday)
        private readonly repository: Repository<MasterHoliday>,
    ) {}

    async findBetween(start: Date, end: Date): Promise<MasterHoliday[]> {
        return this.repository.find({
            where: {
                holidayDate: Between(start, end),
            },
        });
    }
}
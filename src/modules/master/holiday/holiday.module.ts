import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterHoliday } from './entities/holiday.entity';
import { HolidayController } from './holiday.controller';
import { HolidayService } from './holiday.service';

@Module({
    imports: [TypeOrmModule.forFeature([MasterHoliday])],
    controllers: [HolidayController],
    providers: [HolidayService],
})
export class HolidayModule {}

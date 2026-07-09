import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterWorkingCalendar } from './entities/working-calendar.entity';
import { WorkingCalendarController } from './working-calendar.controller';
import { WorkingCalendarService } from './working-calendar.service';

@Module({
    imports: [TypeOrmModule.forFeature([MasterWorkingCalendar])],
    controllers: [WorkingCalendarController],
    providers: [WorkingCalendarService],
})
export class WorkingCalendarModule {}

import { MasterHoliday } from "@modules/master/holiday/entities/holiday.entity";
import { MasterWorkingCalendar } from "@modules/master/working-calendar/entities/working-calendar.entity";

export interface CalculateDueDateOptions {
    startDate: Date;
    duration: number;
    unit: 'DAY' | 'HOUR';
    useCalendar: boolean;
    calendars: MasterWorkingCalendar[];
    holidays: MasterHoliday[];
}
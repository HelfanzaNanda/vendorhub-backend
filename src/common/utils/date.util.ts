import { CalculateDueDateOptions } from "@common/dto/date.dto";
import dayjs from "dayjs";

export class DateUtil {

    private static readonly DATE_FORMAT = 'DD MMM YYYY';
    private static readonly DATETIME_FORMAT = 'DD MMM YYYY HH:mm';
    private static readonly DATETIME_SECOND_FORMAT = 'DD MMM YYYY HH:mm:ss';

    static toDate(str?: string) : Date | undefined {
        if (!str) {
            return undefined;
        }
        return dayjs(str).toDate();
    }

    static now() : Date {
        return new Date();
    }

    static addYears(date : Date, years : number) : Date {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }

    static diffDays(start: Date, end: Date): number {
        return dayjs(end).diff(dayjs(start), 'day');
    }

    static addDays(start: Date, days: number): Date {
        return dayjs(start).add(days, 'day').toDate();
    }

    static addHours(start: Date, hours: number): Date {
        return dayjs(start).add(hours, 'hour').toDate();
    }

    static addMinutes(start: Date, minutes: number): Date {
        return dayjs(start).add(minutes, 'minute').toDate();
    }

    static addSeconds(start: Date, seconds: number): Date {
        return dayjs(start).add(seconds, 'second').toDate();
    }

    static addBusinessDays(start: Date, days: number): Date {
        let date = dayjs(start);
        let count = 0;

        while (count < days) {
            const day = date.day();
            if (day !== 0 && day !== 6) {
                count++;
            }
            if (count < days) {
                date = date.add(1, 'day');
            }
        }

        return date.toDate();
    }

    static formatDate(date?: Date | string): string {
        if (!date) {
            return '-';
        }
        return dayjs(date).format('DD MMM YYYY');
    }

    static formatDateTime(date?: Date | string): string {
        if (!date) {
            return '-';
        }
        return dayjs(date).format('DD MMM YYYY HH:mm');
    }

    static formatDateTimeSecond(date?: Date | string): string {
        if (!date) {
            return '-';
        }
        return dayjs(date).format('DD MMM YYYY HH:mm:ss');
    }

    static calculateDueAt(options : CalculateDueDateOptions): Date {

        const {
            startDate,
            duration,
            unit,
            useCalendar,
            calendars,
            holidays
        } = options;

        const result = new Date(startDate);

        if (!useCalendar) {
            if (unit === 'DAY') result.setDate(result.getDate() + duration);
            else if (unit === 'HOUR') result.setHours(result.getHours() + duration);
            return result;
        }

        if (unit === 'HOUR') {
            result.setHours(result.getHours() + duration);
            return result;
        }

        let daysAdded = 0;
        const holidayDates = holidays.map(h => {
            const d = new Date(h.holidayDate);
            return d.toISOString().split('T')[0];
        });
        const workingDays = new Set(calendars.filter(c => c.isWorkingDay).map(c => c.dayOfWeek));

        while (daysAdded < duration) {
            result.setDate(result.getDate() + 1);
            const dateStr = result.toISOString().split('T')[0];
            const isHoliday = holidayDates.includes(dateStr);
            const isWorkingDay = workingDays.has(result.getDay());

            if (!isHoliday && isWorkingDay) {
                daysAdded++;
            }
        }

        const calendar = calendars.find(c => c.dayOfWeek === result.getDay());
        if (calendar && calendar.endTime) {
            const [hours, minutes] = calendar.endTime.split(':');
            result.setHours(Number(hours), Number(minutes), 0, 0);
        }
        return result;
    }

}
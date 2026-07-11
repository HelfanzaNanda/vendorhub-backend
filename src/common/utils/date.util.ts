import dayjs from "dayjs";

export class DateUtil {

    private static readonly DATE_FORMAT = 'DD MMM YYYY';
    private static readonly DATETIME_FORMAT = 'DD MMM YYYY HH:mm';
    private static readonly DATETIME_SECOND_FORMAT = 'DD MMM YYYY HH:mm:ss';

    static diffDays(start: Date, end: Date): number {
        return dayjs(end).diff(dayjs(start), 'day');
    }

    static addDays(start: Date, days: number): Date {
        return dayjs(start).add(days, 'day').toDate();
    }

    static addHours(start: Date, hours: number): Date {
        return dayjs(start).add(hours, 'hour').toDate();
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

}
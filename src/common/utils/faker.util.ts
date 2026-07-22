import { CalculateDueDateOptions } from "@common/dto/date.dto";
import { MasterHoliday } from "@modules/master/holiday/entities/holiday.entity";
import { MasterWorkingCalendar } from "@modules/master/working-calendar/entities/working-calendar.entity";
import dayjs from "dayjs";

export class FakerUtil {

    static randomArrayElement<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    static randomArrayElements<T>(arr: T[], count: number): T[] {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    static randomCsvFromArray<T extends { id: number }>(arr: T[], count: number): string {
        // ambil random items sebanyak count
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);

        // ambil id lalu gabungkan dengan koma
        return selected.map(item => item.id).join(',');
    }

}
import { HolidayRepository } from "@modules/master/holiday/holiday.repository";
import { Injectable } from "@nestjs/common";
import { SlaResult } from "./dto/result-sla.dto";

@Injectable()
export class SlaService {
    constructor(
        private readonly holidayRepository: HolidayRepository,
    ) {}

    async calculate(
        assignedAt: Date,
        actionAt: Date | null,
        target: number,
        useWorkingCalendar: boolean,
    ): Promise<SlaResult> {
        const end = actionAt ?? new Date();

        const actual = useWorkingCalendar
            ? await this.calculateWorkingDays(assignedAt, end)
            : this.calculateCalendarDays(assignedAt, end);

        return {
            actual,
            target,
            isOverSla: actual > target,
        };
    }

    private calculateCalendarDays(start: Date, end: Date): number {
        const ms = end.getTime() - start.getTime();

        return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
    }

    private async calculateWorkingDays(start: Date, end: Date): Promise<number> {
        const holidays = await this.holidayRepository.findBetween(start, end);

        const holidaySet = new Set(
            holidays.map(x => this.formatDate(x.holidayDate)),
        );

        let total = 0;

        const current = new Date(start);

        while (current < end) {
            current.setDate(current.getDate() + 1);

            const day = current.getDay();

            const isWeekend = day === 0 || day === 6;

            const isHoliday = holidaySet.has(this.formatDate(current));

            if (!isWeekend && !isHoliday) {
                total++;
            }
        }

        return total;
    }

    private formatDate(date: Date): string {
        return date.toISOString().substring(0, 10);
    }
}
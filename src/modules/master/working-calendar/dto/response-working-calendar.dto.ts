export class WorkingCalendarResponseDto {
    id?: number | null;
    dayOfWeek?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    isWorkingDay?: boolean | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}

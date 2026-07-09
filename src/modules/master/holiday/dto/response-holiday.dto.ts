export class HolidayResponseDto {
    id?: number | null;
    holidayDate?: Date | null;
    holidayName?: string | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}

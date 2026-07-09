import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkingCalendarDto {
    @IsOptional()
    dayOfWeek: number;

    @IsOptional()
    startTime: string;

    @IsOptional()
    endTime: string;

    @IsOptional()
    isWorkingDay: boolean;

}

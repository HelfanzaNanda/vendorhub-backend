import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHolidayDto {
    @IsOptional()
    holidayDate: Date;

    @IsOptional()
    holidayName: string;

}

import { HolidayResponseDto } from '../dto/response-holiday.dto';
import { MasterHoliday } from '../entities/holiday.entity';

export class HolidayMapper {
    static toResponse(entity: MasterHoliday): HolidayResponseDto {
        return {
            id: entity.id,
            holidayDate: entity.holidayDate,
            holidayName: entity.holidayName,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: MasterHoliday[]): HolidayResponseDto[] {
        return entities.map(this.toResponse);
    }
}

import { WorkingCalendarResponseDto } from '../dto/response-working-calendar.dto';
import { MasterWorkingCalendar } from '../entities/working-calendar.entity';

export class WorkingCalendarMapper {
    static toResponse(entity: MasterWorkingCalendar): WorkingCalendarResponseDto {
        return {
            id: entity.id,
            dayOfWeek: entity.dayOfWeek,
            startTime: entity.startTime,
            endTime: entity.endTime,
            isWorkingDay: entity.isWorkingDay,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: MasterWorkingCalendar[]): WorkingCalendarResponseDto[] {
        return entities.map(this.toResponse);
    }
}

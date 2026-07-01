import { CountryResponseDto } from "../dto/response-affiliate-type.dto";
import { Country } from "../entities/province.entity";

export class CountryMapper {
    static toResponse(entity: Country): CountryResponseDto {
        return {
            id: entity.id,
            name: entity.name,
            iso2Code: entity.iso2Code,
            iso3Code: entity.iso3Code,
            phoneCode: entity.phoneCode,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: Country[]): CountryResponseDto[] {
        return entities.map(this.toResponse);
    }
}

import { LookupResponseDto } from "../dto/response-lookup.dto";

export class LookupMapper {
    static toResponses<T>(
      entities: T[],
      valueSelector: (entity: T) => number | string,
      labelSelector: (entity: T) => string,
    ): LookupResponseDto[] {
        return entities.map(entity => ({
            value: valueSelector(entity),
            label: labelSelector(entity),
        }));
    }
  }
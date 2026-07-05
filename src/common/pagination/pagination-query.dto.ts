import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class PaginationQueryDto {
    @IsOptional()
    @IsString()
    personnelTypeCode?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit = 10;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    sortBy?: string;

    @IsOptional()
    @IsIn(['asc', 'desc'])
    sortDir?: 'asc' | 'desc' = 'desc';
}

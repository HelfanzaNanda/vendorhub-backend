import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class QueryCompanyPersonnelTypeDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number = 10;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    sortBy?: 'name' | 'code' | 'createdAt';

    @IsOptional()
    @IsIn(['asc', 'desc'])
    sortDir?: 'asc' | 'desc' = 'asc';
}

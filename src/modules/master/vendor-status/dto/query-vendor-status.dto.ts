
import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";

export class QueryVendorStatusDto {
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
    sortBy?: 'name' | 'phoneCode' | 'iso2Code' | 'iso3Code' | 'createdAt';
  
    @IsOptional()
    @IsIn(['asc', 'desc'])
    sortDir?: 'asc' | 'desc' = 'asc';
  }
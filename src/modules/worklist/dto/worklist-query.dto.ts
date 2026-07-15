import { PersonnelCode } from '@common/enums/personnel-type.enum';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { IsEnum, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export enum WorklistCard {
    NEED_MY_REVIEW = 'NEED_MY_REVIEW',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    REJECTED = 'REJECTED',
    OVER_SLA = 'OVER_SLA'
}

export class WorklistQueryDto extends PaginationQueryDto {
    @IsOptional()
    @IsString()
    workflowCode?: string;

    @IsOptional()
    @IsEnum(WorklistCard)
    card?: WorklistCard;
    
    @IsOptional()
    @IsString()
    sortOrder?: 'asc' | 'desc';
}
export class GetWorklistDetailDto {
    @IsOptional()
    @IsString()
    tab?: string;

    @ValidateIf(o => o.tab === 'personnel')
    @IsEnum(PersonnelCode)
    personnelType: PersonnelCode;

    @ValidateIf(o => o.tab === 'document')
    @IsString()
    documentType: string;
}
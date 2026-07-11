import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

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

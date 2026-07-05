import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { TermsConditionItemApprovalMode } from '../entities/terms-condition-item.entity';

export class CreateTermsConditionItemDto {
    @IsString()
    @IsNotEmpty()
    chapter: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    sortOrder: number;

    @IsString()
    @IsNotEmpty()
    @IsEnum(TermsConditionItemApprovalMode)
    approvalMode: TermsConditionItemApprovalMode;
}

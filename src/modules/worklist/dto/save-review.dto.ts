import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export enum ReviewEntity {
    VENDOR_COMPANY = 'VENDOR_COMPANY',
    VENDOR_PERSONNEL = 'VENDOR_PERSONNEL',
    VENDOR_USER_ACCESS = 'VENDOR_USER_ACCESS',
    VENDOR_BANK = 'VENDOR_BANK',
    VENDOR_AFFILIATION = 'VENDOR_AFFILIATION',
    VENDOR_BUSINESS_LICENSE = 'VENDOR_BUSINESS_LICENSE',
    VENDOR_COMPETENCY = 'VENDOR_COMPETENCY',
    VENDOR_DOCUMENT = 'VENDOR_DOCUMENT',
    VENDOR_FINANCIAL_REPORT = 'VENDOR_FINANCIAL_REPORT'
}

export class SaveReviewDto {
    @IsEnum(ReviewEntity)
    @IsNotEmpty()
    sectionId: ReviewEntity;

    @IsInt()
    @IsNotEmpty()
    recordId: number;

    @IsString()
    @IsNotEmpty()
    status: 'OK' | 'NOT_OK';

    @ValidateIf(o => o.status === 'NOT_OK')
    @IsString()
    @IsNotEmpty()
    remark: string;
}

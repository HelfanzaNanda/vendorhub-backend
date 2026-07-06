import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsObject,
    ValidateNested,
    IsNumber,
    IsEnum,
    ValidateIf,
} from 'class-validator';
import { ReviewStatus } from '../entities/vendor-term-condition-review.entity';

export class EntityIdDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}

export class ChapterReviewDto {
    @IsEnum(ReviewStatus)
    @IsNotEmpty()
    status: ReviewStatus;

    @ValidateIf((o) => o.status === ReviewStatus.REJECTED)
    @IsString()
    @IsNotEmpty()
    reason?: string;
}

export class CreateVendorTermConditionDto {
    @ValidateNested()
    @Type(() => EntityIdDto)
    @IsNotEmpty()
    termsConditionId: EntityIdDto;

    @IsString()
    @IsNotEmpty()
    vendorName: string;

    @IsString()
    @IsNotEmpty()
    authorizedSignatory: string;

    @IsString()
    @IsNotEmpty()
    position: string;

    @ValidateNested()
    @Type(() => EntityIdDto)
    @IsNotEmpty()
    supportingDocumentId: EntityIdDto;

    @ValidateNested()
    @Type(() => EntityIdDto)
    @IsNotEmpty()
    signedDocumentId: EntityIdDto;

    @IsObject()
    @IsNotEmpty()
    chapterReviews: Record<string, ChapterReviewDto>;
}

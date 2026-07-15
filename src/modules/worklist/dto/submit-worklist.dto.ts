import { VendorPriorityEnum } from '@common/enums/vendor.enum';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export enum WorklistSubmitStatus {
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    REVISED = 'REVISED'
}

export class SubmitWorklistDto {
    @IsEnum(WorklistSubmitStatus)
    @IsNotEmpty()
    status: WorklistSubmitStatus;

    @ValidateIf(o => o.status === WorklistSubmitStatus.APPROVED)
    @IsInt()
    @IsNotEmpty()
    vendorCategoryItemId?: number;

    @ValidateIf(o => o.status === WorklistSubmitStatus.APPROVED)
    @IsEnum(VendorPriorityEnum)
    @IsNotEmpty()
    priority: VendorPriorityEnum;

    @IsString()
    @IsNotEmpty()
    remarks: string;
}

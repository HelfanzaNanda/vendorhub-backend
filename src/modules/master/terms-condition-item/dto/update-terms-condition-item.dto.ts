import { PartialType } from "@nestjs/mapped-types";
import { CreateTermsConditionItemDto } from "./create-terms-condition-item.dto";

export class UpdateTermsConditionItemDto extends PartialType(CreateTermsConditionItemDto) {}
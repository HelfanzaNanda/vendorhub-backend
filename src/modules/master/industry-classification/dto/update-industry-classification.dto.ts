import { PartialType } from "@nestjs/mapped-types";
import { CreateIndustryClassificationDto } from "./create-industry-classification.dto";

export class UpdateIndustryClassificationDto extends PartialType(CreateIndustryClassificationDto) {}

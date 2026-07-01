import { PartialType } from "@nestjs/mapped-types";
import { CreateCompetencySubCategoryDto } from "./create-competency-subcategory.dto";

export class UpdateCompetencySubCategoryDto extends PartialType(CreateCompetencySubCategoryDto) {}

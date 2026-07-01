import { PartialType } from "@nestjs/mapped-types";
import { CreateCountryDto } from "./create-affiliate-type.dto";

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
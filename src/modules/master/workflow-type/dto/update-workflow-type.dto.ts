import { PartialType } from "@nestjs/mapped-types";
import { CreateWorkflowTypeDto } from "./create-workflow-type.dto";

export class UpdateWorkflowTypeDto extends PartialType(CreateWorkflowTypeDto) {}
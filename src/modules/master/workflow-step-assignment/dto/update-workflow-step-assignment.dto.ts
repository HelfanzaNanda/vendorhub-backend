import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowStepAssignmentDto } from './create-workflow-step-assignment.dto';

export class UpdateWorkflowStepAssignmentDto extends PartialType(CreateWorkflowStepAssignmentDto) {}

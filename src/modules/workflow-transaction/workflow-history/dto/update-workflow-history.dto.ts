import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowHistoryDto } from './create-workflow-history.dto';

export class UpdateWorkflowHistoryDto extends PartialType(CreateWorkflowHistoryDto) {}

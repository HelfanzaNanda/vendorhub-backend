import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowTransactionStepDto } from './create-workflow-transaction-step.dto';

export class UpdateWorkflowTransactionStepDto extends PartialType(CreateWorkflowTransactionStepDto) {}

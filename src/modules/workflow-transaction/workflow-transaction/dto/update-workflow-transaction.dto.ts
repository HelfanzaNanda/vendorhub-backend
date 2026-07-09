import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowTransactionDto } from './create-workflow-transaction.dto';

export class UpdateWorkflowTransactionDto extends PartialType(CreateWorkflowTransactionDto) {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowTransactionStep } from './entities/workflow-transaction-step.entity';
import { WorkflowTransactionStepController } from './workflow-transaction-step.controller';
import { WorkflowTransactionStepService } from './workflow-transaction-step.service';

@Module({
    imports: [TypeOrmModule.forFeature([WorkflowTransactionStep])],
    controllers: [WorkflowTransactionStepController],
    providers: [WorkflowTransactionStepService],
})
export class WorkflowTransactionStepModule {}

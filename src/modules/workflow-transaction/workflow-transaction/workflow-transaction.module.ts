import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowTransaction } from './entities/workflow-transaction.entity';
import { WorkflowTransactionController } from './workflow-transaction.controller';
import { WorkflowTransactionService } from './workflow-transaction.service';

@Module({
    imports: [TypeOrmModule.forFeature([WorkflowTransaction])],
    controllers: [WorkflowTransactionController],
    providers: [WorkflowTransactionService],
    exports: [WorkflowTransactionService],
})
export class WorkflowTransactionModule {}

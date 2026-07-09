import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowHistory } from './entities/workflow-history.entity';
import { WorkflowHistoryController } from './workflow-history.controller';
import { WorkflowHistoryService } from './workflow-history.service';

@Module({
    imports: [TypeOrmModule.forFeature([WorkflowHistory])],
    controllers: [WorkflowHistoryController],
    providers: [WorkflowHistoryService],
})
export class WorkflowHistoryModule {}

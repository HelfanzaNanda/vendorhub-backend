import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterWorkflow } from './entities/workflow.entity';
import { WorkflowController } from './workflow.controller';
import { WorkflowService } from './workflow.service';

@Module({
    imports: [TypeOrmModule.forFeature([MasterWorkflow])],
    controllers: [WorkflowController],
    providers: [WorkflowService],
})
export class WorkflowModule {}

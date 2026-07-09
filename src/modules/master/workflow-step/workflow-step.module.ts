import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterWorkflowStep } from './entities/workflow-step.entity';
import { WorkflowStepController } from './workflow-step.controller';
import { WorkflowStepService } from './workflow-step.service';

@Module({
    imports: [TypeOrmModule.forFeature([MasterWorkflowStep])],
    controllers: [WorkflowStepController],
    providers: [WorkflowStepService],
})
export class WorkflowStepModule {}

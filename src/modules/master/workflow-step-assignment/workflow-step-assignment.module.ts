import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterWorkflowStepAssignment } from './entities/workflow-step-assignment.entity';
import { WorkflowStepAssignmentController } from './workflow-step-assignment.controller';
import { WorkflowStepAssignmentService } from './workflow-step-assignment.service';

@Module({
    imports: [TypeOrmModule.forFeature([MasterWorkflowStepAssignment])],
    controllers: [WorkflowStepAssignmentController],
    providers: [WorkflowStepAssignmentService],
})
export class WorkflowStepAssignmentModule {}

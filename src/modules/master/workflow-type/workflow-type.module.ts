import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowType } from './entities/workflow-type.entity';
import { WorkflowTypeController } from './workflow-type.controller';
import { WorkflowTypeService } from './workflow-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkflowType])],
  controllers: [WorkflowTypeController],
  providers: [WorkflowTypeService],
})
export class WorkflowTypeModule {}

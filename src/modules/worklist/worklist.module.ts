import { Module } from '@nestjs/common';
import { WorklistController } from './worklist.controller';
import { WorklistService } from './worklist.service';
import { WorklistRepository } from './repositories/worklist.repository';
import { SlaService } from '@modules/workflow-transaction/workflow-engine/services/sla.service';
import { HolidayRepository } from '@modules/master/holiday/holiday.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([
            MasterHoliday, 
            // MasterWorkflow, 
            // WorkflowTransaction, 
            // WorkflowTransactionStep, 
            // WorkflowTransactionHistory
        ])
    ],
    controllers: [WorklistController],
    providers: [WorklistService, SlaService, HolidayRepository, WorklistRepository],
})
export class WorklistModule {}

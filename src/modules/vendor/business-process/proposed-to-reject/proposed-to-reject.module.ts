import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposedToRejectController } from './proposed-to-reject.controller';
import { ProposedToRejectService } from './proposed-to-reject.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [ProposedToRejectController],
    providers: [ProposedToRejectService],
    exports: [ProposedToRejectService],
})
export class ProposedToRejectModule {}

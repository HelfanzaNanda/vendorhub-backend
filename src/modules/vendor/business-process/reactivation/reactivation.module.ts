import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReactivationController } from './reactivation.controller';
import { ReactivationService } from './reactivation.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [ReactivationController],
    providers: [ReactivationService],
    exports: [ReactivationService],
})
export class ReactivationModule {}

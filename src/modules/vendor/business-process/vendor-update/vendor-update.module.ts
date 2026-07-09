import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUpdateController } from './vendor-update.controller';
import { VendorUpdateService } from './vendor-update.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [VendorUpdateController],
    providers: [VendorUpdateService],
    exports: [VendorUpdateService],
})
export class VendorUpdateModule {}

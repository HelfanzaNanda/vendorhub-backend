import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUpdateController } from './vendor-update.controller';
import { VendorUpdateService } from './vendor-update.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp, Vendor]),
        WorkflowTransactionModule,
    ],
    controllers: [VendorUpdateController],
    providers: [VendorUpdateService],
    exports: [VendorUpdateService],
})
export class VendorUpdateModule {}

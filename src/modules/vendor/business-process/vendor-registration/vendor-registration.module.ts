import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorRegistrationController } from './vendor-registration.controller';
import { VendorRegistrationService } from './vendor-registration.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [VendorRegistrationController],
    providers: [VendorRegistrationService],
    exports: [VendorRegistrationService],
})
export class VendorRegistrationModule {}

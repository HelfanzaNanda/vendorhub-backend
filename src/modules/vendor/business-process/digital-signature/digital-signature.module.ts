import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DigitalSignatureController } from './digital-signature.controller';
import { DigitalSignatureService } from './digital-signature.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [DigitalSignatureController],
    providers: [DigitalSignatureService],
    exports: [DigitalSignatureService],
})
export class DigitalSignatureModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteCompanyAccountController } from './delete-company-account.controller';
import { DeleteCompanyAccountService } from './delete-company-account.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [DeleteCompanyAccountController],
    providers: [DeleteCompanyAccountService],
    exports: [DeleteCompanyAccountService],
})
export class DeleteCompanyAccountModule {}

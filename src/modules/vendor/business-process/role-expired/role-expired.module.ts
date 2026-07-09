import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleExpiredController } from './role-expired.controller';
import { RoleExpiredService } from './role-expired.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [RoleExpiredController],
    providers: [RoleExpiredService],
    exports: [RoleExpiredService],
})
export class RoleExpiredModule {}

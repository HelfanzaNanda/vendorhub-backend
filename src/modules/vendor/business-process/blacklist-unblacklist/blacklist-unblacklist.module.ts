import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlacklistUnblacklistController } from './blacklist-unblacklist.controller';
import { BlacklistUnblacklistService } from './blacklist-unblacklist.service';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [BlacklistUnblacklistController],
    providers: [BlacklistUnblacklistService],
    exports: [BlacklistUnblacklistService],
})
export class BlacklistUnblacklistModule {}

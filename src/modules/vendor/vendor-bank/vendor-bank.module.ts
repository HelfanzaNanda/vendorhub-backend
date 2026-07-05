import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBank } from './entities/vendor-bank.entity';
import { VendorBankController } from './vendor-bank.controller';
import { VendorBankService } from './vendor-bank.service';

@Module({
    imports: [TypeOrmModule.forFeature([VendorBank])],
    controllers: [VendorBankController],
    providers: [VendorBankService],
    exports: [VendorBankService],
})
export class VendorBankModule {}

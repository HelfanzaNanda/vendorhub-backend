import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBankTemp } from './entities/vendor-bank-temp.entity';
import { VendorBankTempController } from './vendor-bank-temp.controller';
import { VendorBankTempService } from './vendor-bank-temp.service';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorBank, VendorBankTemp]),
        VendorTempModule
    ],
    controllers: [VendorBankTempController],
    providers: [VendorBankTempService],
    exports: [VendorBankTempService],
})
export class VendorBankTempModule {}

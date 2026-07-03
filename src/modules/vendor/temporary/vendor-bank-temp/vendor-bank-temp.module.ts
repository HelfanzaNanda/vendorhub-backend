import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBankTemp } from './entities/vendor-bank-temp.entity';
import { VendorBankTempController } from './vendor-bank-temp.controller';
import { VendorBankTempService } from './vendor-bank-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorBankTemp])],
  controllers: [VendorBankTempController],
  providers: [VendorBankTempService],
  exports: [VendorBankTempService],
})
export class VendorBankTempModule {}

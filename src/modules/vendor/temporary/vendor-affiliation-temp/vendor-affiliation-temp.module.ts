import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorAffiliationTemp } from './entities/vendor-affiliation-temp.entity';
import { VendorAffiliationTempController } from './vendor-affiliation-temp.controller';
import { VendorAffiliationTempService } from './vendor-affiliation-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorAffiliationTemp])],
  controllers: [VendorAffiliationTempController],
  providers: [VendorAffiliationTempService],
  exports: [VendorAffiliationTempService],
})
export class VendorAffiliationTempModule {}

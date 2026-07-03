import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorAffiliation } from './entities/vendor-affiliation.entity';
import { VendorAffiliationController } from './vendor-affiliation.controller';
import { VendorAffiliationService } from './vendor-affiliation.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorAffiliation])],
  controllers: [VendorAffiliationController],
  providers: [VendorAffiliationService],
  exports: [VendorAffiliationService],
})
export class VendorAffiliationModule {}

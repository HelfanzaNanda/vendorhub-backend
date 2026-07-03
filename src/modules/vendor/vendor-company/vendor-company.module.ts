import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCompany } from './entities/vendor-company.entity';
import { VendorCompanyController } from './vendor-company.controller';
import { VendorCompanyService } from './vendor-company.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorCompany])],
  controllers: [VendorCompanyController],
  providers: [VendorCompanyService],
  exports: [VendorCompanyService],
})
export class VendorCompanyModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBusinessLicenseItem } from './entities/vendor-business-license-item.entity';
import { VendorBusinessLicenseItemController } from './vendor-business-license-item.controller';
import { VendorBusinessLicenseItemService } from './vendor-business-license-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorBusinessLicenseItem])],
  controllers: [VendorBusinessLicenseItemController],
  providers: [VendorBusinessLicenseItemService],
  exports: [VendorBusinessLicenseItemService],
})
export class VendorBusinessLicenseItemModule {}

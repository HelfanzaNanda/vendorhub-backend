import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBusinessLicense } from './entities/vendor-business-license.entity';
import { VendorBusinessLicenseController } from './vendor-business-license.controller';
import { VendorBusinessLicenseService } from './vendor-business-license.service';

@Module({
    imports: [TypeOrmModule.forFeature([VendorBusinessLicense])],
    controllers: [VendorBusinessLicenseController],
    providers: [VendorBusinessLicenseService],
    exports: [VendorBusinessLicenseService],
})
export class VendorBusinessLicenseModule {}

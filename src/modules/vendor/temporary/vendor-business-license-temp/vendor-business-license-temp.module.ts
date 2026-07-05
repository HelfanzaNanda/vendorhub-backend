import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorBusinessLicenseTemp } from './entities/vendor-business-license-temp.entity';
import { VendorBusinessLicenseTempController } from './vendor-business-license-temp.controller';
import { VendorBusinessLicenseTempService } from './vendor-business-license-temp.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorBusinessLicenseTemp]),
        VendorTempModule,
    ],
    controllers: [VendorBusinessLicenseTempController],
    providers: [VendorBusinessLicenseTempService],
    exports: [VendorBusinessLicenseTempService],
})
export class VendorBusinessLicenseTempModule {}

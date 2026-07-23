import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorBusinessLicense } from './entities/vendor-business-license.entity';
import { VendorBusinessLicenseController } from './vendor-business-license.controller';
import { VendorBusinessLicenseService } from './vendor-business-license.service';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorBusinessLicense, IndustryClassification ])],
    controllers: [VendorBusinessLicenseController],
    providers: [VendorBusinessLicenseService],
    exports: [VendorBusinessLicenseService],
})
export class VendorBusinessLicenseModule {}

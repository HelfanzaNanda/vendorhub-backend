import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorCompanyTemp } from './entities/vendor-company-temp.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorCompanyTempController } from './vendor-company-temp.controller';
import { VendorCompanyTempService } from './vendor-company-temp.service';
import { VendorCompanyService } from '@modules/vendor/vendor-company/vendor-company.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorCompanyTemp, VendorCompany]),
        VendorTempModule,
    ],
    controllers: [VendorCompanyTempController],
    providers: [VendorCompanyTempService],
    exports: [VendorCompanyTempService],
})
export class VendorCompanyTempModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorCompanyTemp } from './entities/vendor-company-temp.entity';
import { VendorCompanyTempController } from './vendor-company-temp.controller';
import { VendorCompanyTempService } from './vendor-company-temp.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorCompanyTemp]),
        VendorTempModule,
    ],
    controllers: [VendorCompanyTempController],
    providers: [VendorCompanyTempService],
    exports: [VendorCompanyTempService],
})
export class VendorCompanyTempModule {}

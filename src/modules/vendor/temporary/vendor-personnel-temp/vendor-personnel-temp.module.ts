import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorPersonnelTemp } from './entities/vendor-personnel-temp.entity';
import { VendorPersonnelTempController } from './vendor-personnel-temp.controller';
import { VendorPersonnelTempService } from './vendor-personnel-temp.service';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorPersonnel, VendorPersonnelTemp, CompanyPersonnelType, File]),
        VendorTempModule
    ],
    controllers: [VendorPersonnelTempController],
    providers: [VendorPersonnelTempService],
exports: [VendorPersonnelTempService],
})
export class VendorPersonnelTempModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { VendorCompetencyTemp } from './entities/vendor-competency-temp.entity';
import { VendorCustomerReferenceTemp } from './entities/vendor-customer-reference-temp.entity';
import { VendorCompetencyTempService } from './vendor-competency-temp.service';
import { VendorCompetencyTempController } from './vendor-competency-temp.controller';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { Area } from '@modules/master/area/entities/area.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorCompetency, VendorCompetencyTemp, VendorCustomerReferenceTemp, Area]),
        VendorTempModule
    ],
    controllers: [VendorCompetencyTempController],
    providers: [VendorCompetencyTempService],
    exports: [VendorCompetencyTempService],
})
export class VendorCompetencyTempModule {}

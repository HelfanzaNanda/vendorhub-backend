import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorAffiliationTemp } from './entities/vendor-affiliation-temp.entity';
import { VendorAffiliationTempController } from './vendor-affiliation-temp.controller';
import { VendorAffiliationTempService } from './vendor-affiliation-temp.service';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorAffiliation, VendorAffiliationTemp]),
        VendorTempModule
    ],
    controllers: [VendorAffiliationTempController],
    providers: [VendorAffiliationTempService],
    exports: [VendorAffiliationTempService],
})
export class VendorAffiliationTempModule {}

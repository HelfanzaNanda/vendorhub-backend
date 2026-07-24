import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTemp } from './entities/vendor-temp.entity';
import { VendorTempService } from './vendor-temp.service';
import { RunningNumberModule } from '@modules/running-number/running-number.module';
import { VendorCategoryItem } from '@modules/master/vendor-category-item/entities/vendor-category-item.entity';
import { VendorCategory } from '@modules/master/vendor-category/entities/vendor-category.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp, Vendor, VendorCategoryItem, VendorCategory]),
        RunningNumberModule
    ],
    providers: [VendorTempService],
    exports: [VendorTempService],
})
export class VendorTempModule {}

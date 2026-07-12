import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { VendorCategoryItem } from '@modules/master/vendor-category-item/entities/vendor-category-item.entity';
import { VendorCategory } from '@modules/master/vendor-category/entities/vendor-category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Vendor, VendorCategoryItem, VendorCategory])],
    controllers: [VendorController],
    providers: [VendorService],
    exports: [VendorService],
})
export class VendorModule {}

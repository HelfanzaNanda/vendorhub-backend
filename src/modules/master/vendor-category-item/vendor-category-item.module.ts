import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCategoryItem } from './entities/vendor-category-item.entity';
import { VendorCategoryItemController } from './vendor-category-item.controller';
import { VendorCategoryItemService } from './vendor-category-item.service';
import { VendorCategory } from '../vendor-category/entities/vendor-category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorCategoryItem, VendorCategory])],
    controllers: [VendorCategoryItemController],
    providers: [VendorCategoryItemService],
    exports: [VendorCategoryItemService]
})
export class VendorCategoryItemModule {}

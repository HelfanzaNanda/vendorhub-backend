import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCategory } from './entities/vendor-category.entity';
import { VendorCategoryController } from './vendor-category.controller';
import { VendorCategoryService } from './vendor-category.service';
import { VendorCategoryItem } from '../vendor-category-item/entities/vendor-category-item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorCategory])],
    controllers: [VendorCategoryController],
    providers: [VendorCategoryService],
    exports: [VendorCategoryService]
})
export class VendorCategoryModule {}

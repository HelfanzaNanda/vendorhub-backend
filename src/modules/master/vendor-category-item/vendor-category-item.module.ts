import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCategoryItem } from './entities/vendor-category-item.entity';
import { VendorCategoryItemController } from './vendor-category-item.controller';
import { VendorCategoryItemService } from './vendor-category-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorCategoryItem])],
  controllers: [VendorCategoryItemController],
  providers: [VendorCategoryItemService],
})
export class VendorCategoryItemModule {}

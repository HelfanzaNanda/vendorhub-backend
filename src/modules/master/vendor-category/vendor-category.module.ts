import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCategory } from './entities/vendor-category.entity';
import { VendorCategoryController } from './vendor-category.controller';
import { VendorCategoryService } from './vendor-category.service';

@Module({
    imports: [TypeOrmModule.forFeature([VendorCategory])],
    controllers: [VendorCategoryController],
    providers: [VendorCategoryService],
})
export class VendorCategoryModule {}

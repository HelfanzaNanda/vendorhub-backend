import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencySubCategory } from './entities/competency-subcategory.entity';
import { CompetencySubCategoryController } from './competency-subcategory.controller';
import { CompetencySubCategoryService } from './competency-subcategory.service';
import { CompetencyCategory } from '../competency-category/entities/competency-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencySubCategory, CompetencyCategory])],
  controllers: [CompetencySubCategoryController],
  providers: [CompetencySubCategoryService],
})
export class CompetencySubCategoryModule {}

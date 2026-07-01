import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencySubCategory } from './entities/competency-subcategory.entity';
import { CompetencySubCategoryController } from './competency-subcategory.controller';
import { CompetencySubCategoryService } from './competency-subcategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencySubCategory])],
  controllers: [CompetencySubCategoryController],
  providers: [CompetencySubCategoryService],
})
export class CompetencySubCategoryModule {}

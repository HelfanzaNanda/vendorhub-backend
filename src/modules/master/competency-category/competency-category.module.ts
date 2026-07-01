import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencyCategory } from './entities/competency-category.entity';
import { CompetencyCategoryController } from './competency-category.controller';
import { CompetencyCategoryService } from './competency-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencyCategory])],
  controllers: [CompetencyCategoryController],
  providers: [CompetencyCategoryService],
})
export class CompetencyCategoryModule {}

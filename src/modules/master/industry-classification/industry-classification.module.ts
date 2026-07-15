import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustryClassification } from './entities/industry-classification.entity';
import { IndustryClassificationController } from './industry-classification.controller';
import { IndustryClassificationService } from './industry-classification.service';
import { CompetencyItem } from '../competency-item/entities/competency-item.entity';
import { CompetencySubCategory } from '../competency-subcategory/entities/competency-subcategory.entity';
import { CompetencyCategory } from '../competency-category/entities/competency-category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([IndustryClassification, CompetencyItem, CompetencySubCategory, CompetencyCategory])],
    controllers: [IndustryClassificationController],
    providers: [IndustryClassificationService],
    exports: [IndustryClassificationService],
})
export class IndustryClassificationModule {}

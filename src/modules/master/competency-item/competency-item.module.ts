import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencyItem } from './entities/competency-item.entity';
import { CompetencyItemController } from './competency-item.controller';
import { CompetencyItemService } from './competency-item.service';
import { CompetencySubCategory } from '../competency-subcategory/entities/competency-subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencyItem, CompetencySubCategory])],
  controllers: [CompetencyItemController],
  providers: [CompetencyItemService],
  exports:[CompetencyItemService]
})
export class CompetencyItemModule {}

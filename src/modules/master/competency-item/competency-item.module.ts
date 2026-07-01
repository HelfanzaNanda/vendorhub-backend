import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencyItem } from './entities/competency-item.entity';
import { CompetencyItemController } from './competency-item.controller';
import { CompetencyItemService } from './competency-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencyItem])],
  controllers: [CompetencyItemController],
  providers: [CompetencyItemService],
})
export class CompetencyItemModule {}

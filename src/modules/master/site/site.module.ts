import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { Area } from '../area/entities/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site, Area])],
  controllers: [SiteController],
  providers: [SiteService],
  exports: [SiteService],

})
export class SiteModule {}
  
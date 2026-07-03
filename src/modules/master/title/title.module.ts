import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Title } from './entities/title.entity';
import { TitleController } from './title.controller';
import { TitleService } from './title.service';

@Module({
  imports: [TypeOrmModule.forFeature([Title])],
  controllers: [TitleController],
  providers: [TitleService],
  exports: [TitleService]
})
export class TitleModule {}

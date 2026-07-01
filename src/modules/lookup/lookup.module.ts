import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';

@Module({
//   imports: [TypeOrmModule.forFeature([Lookup])],
  controllers: [LookupController],
  providers: [LookupService],
})
export class LookupModule {}

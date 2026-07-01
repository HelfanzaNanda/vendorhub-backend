import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelcoPrefix } from './entities/telco-prefix.entity';
import { TelcoPrefixController } from './telco-prefix.controller';
import { TelcoPrefixService } from './telco-prefix.service';

@Module({
  imports: [TypeOrmModule.forFeature([TelcoPrefix])],
  controllers: [TelcoPrefixController],
  providers: [TelcoPrefixService],
})
export class TelcoPrefixModule {}

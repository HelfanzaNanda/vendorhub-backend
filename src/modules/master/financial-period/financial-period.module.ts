import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialPeriod } from './entities/financial-period.entity';
import { FinancialPeriodController } from './financial-period.controller';
import { FinancialPeriodService } from './financial-period.service';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialPeriod])],
  controllers: [FinancialPeriodController],
  providers: [FinancialPeriodService],
  exports:[FinancialPeriodService]
})
export class FinancialPeriodModule {}

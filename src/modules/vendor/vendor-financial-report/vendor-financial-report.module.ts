import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorFinancialReport } from './entities/vendor-financial-report.entity';
import { VendorFinancialReportController } from './vendor-financial-report.controller';
import { VendorFinancialReportService } from './vendor-financial-report.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorFinancialReport])],
  controllers: [VendorFinancialReportController],
  providers: [VendorFinancialReportService],
  exports: [VendorFinancialReportService],
})
export class VendorFinancialReportModule {}

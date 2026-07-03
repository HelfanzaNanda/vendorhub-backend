import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorFinancialReportTemp } from './entities/vendor-financial-report-temp.entity';
import { VendorFinancialReportTempController } from './vendor-financial-report-temp.controller';
import { VendorFinancialReportTempService } from './vendor-financial-report-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorFinancialReportTemp])],
  controllers: [VendorFinancialReportTempController],
  providers: [VendorFinancialReportTempService],
  exports: [VendorFinancialReportTempService],
})
export class VendorFinancialReportTempModule {}

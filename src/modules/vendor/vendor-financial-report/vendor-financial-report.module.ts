import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorFinancialReport } from './entities/vendor-financial-report.entity';
import { VendorFinancialReportController } from './vendor-financial-report.controller';
import { VendorFinancialReportService } from './vendor-financial-report.service';
import { FinancialPeriod } from '@modules/master/financial-period/entities/financial-period.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorFinancialReport, FinancialPeriod])],
    controllers: [VendorFinancialReportController],
    providers: [VendorFinancialReportService],
    exports: [VendorFinancialReportService],
})
export class VendorFinancialReportModule {}

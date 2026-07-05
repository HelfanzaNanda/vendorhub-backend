import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorFinancialReportTemp } from './entities/vendor-financial-report-temp.entity';
import { VendorFinancialReportTempController } from './vendor-financial-report-temp.controller';
import { VendorFinancialReportTempService } from './vendor-financial-report-temp.service';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorFinancialReport, VendorFinancialReportTemp]),
        VendorTempModule
    ],
    controllers: [VendorFinancialReportTempController],
    providers: [VendorFinancialReportTempService],
    exports: [VendorFinancialReportTempService],
})
export class VendorFinancialReportTempModule {}

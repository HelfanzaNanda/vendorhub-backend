import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { CreateVendorFinancialReportTempDto } from './dto/create-vendor-financial-report-temp.dto';
import { UpdateVendorFinancialReportTempDto } from './dto/update-vendor-financial-report-temp.dto';
import { VendorFinancialReportTempService } from './vendor-financial-report-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { Public } from '@common/decorators/public.decorator';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { DataSource } from '@common/enums';

@Controller('vendor-financial-report-temps')
@UseGuards(JwtAuthGuard)
export class VendorFinancialReportTempController {
    constructor(private service: VendorFinancialReportTempService) {}

    @Get()
    // @RequirePermission('vendor-financial-report-temp.pagination')
    // @Public()
    pagination(@CurrentVendorId() vendorId: number, @Query() query: PaginationQueryDto) {
        return this.service.pagination(vendorId, query);
    }

    @Post()
    // @RequirePermission('vendor-financial-report-temp.create')
    // @Public()
    create(@CurrentVendorId() vendorId: number, @Body() dto: CreateVendorFinancialReportTempDto) {
        return this.service.create(vendorId, dto);
    }

    @Get(':id')
    findOne(
        @CurrentVendorId() vendorId: number, 
        @Param('id', ParseIntPipe) id: number,
        @Query('source') source: DataSource
    ) {
        return this.service.findOne(vendorId, id, source === DataSource.MASTER);
    }

    @Put(':id')
    // @RequirePermission('vendor-financial-report-temp.update')
    // @Public()
    update(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number,
        @Body() dto: UpdateVendorFinancialReportTempDto,
    ) {
        return this.service.update(vendorId, id, dto, dto.source === DataSource.MASTER);
    }

    @Delete(':id')
    // @RequirePermission('vendor-financial-report-temp.delete')
    // @Public()
    remove(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number,
        @Body('source') source: DataSource
    ) {
        return this.service.delete(vendorId, id, source === DataSource.MASTER);
    }
}

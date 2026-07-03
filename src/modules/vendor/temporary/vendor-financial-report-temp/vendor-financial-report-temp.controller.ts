import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorFinancialReportTempDto } from "./dto/create-vendor-financial-report-temp.dto";
import { UpdateVendorFinancialReportTempDto } from "./dto/update-vendor-financial-report-temp.dto";
import { VendorFinancialReportTempService } from "./vendor-financial-report-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-financial-report-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorFinancialReportTempController {
    constructor(private service: VendorFinancialReportTempService) { }

    @Get()
    @RequirePermission('vendor-financial-report-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-financial-report-temp.create')
    create(@Body() dto: CreateVendorFinancialReportTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-financial-report-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorFinancialReportTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-financial-report-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorFinancialReportDto } from "./dto/create-vendor-financial-report.dto";
import { UpdateVendorFinancialReportDto } from "./dto/update-vendor-financial-report.dto";
import { VendorFinancialReportService } from "./vendor-financial-report.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-financial-reports')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorFinancialReportController {
    constructor(private service: VendorFinancialReportService) { }

    @Get()
    @RequirePermission('vendor-financial-report.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-financial-report.create')
    create(@Body() dto: CreateVendorFinancialReportDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-financial-report.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorFinancialReportDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-financial-report.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

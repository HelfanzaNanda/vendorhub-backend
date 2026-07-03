import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorBusinessLicenseDto } from "./dto/create-vendor-business-license.dto";
import { UpdateVendorBusinessLicenseDto } from "./dto/update-vendor-business-license.dto";
import { VendorBusinessLicenseService } from "./vendor-business-license.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-business-licenses')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBusinessLicenseController {
    constructor(private service: VendorBusinessLicenseService) { }

    @Get()
    @RequirePermission('vendor-business-license.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-business-license.create')
    create(@Body() dto: CreateVendorBusinessLicenseDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-business-license.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorBusinessLicenseDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-business-license.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

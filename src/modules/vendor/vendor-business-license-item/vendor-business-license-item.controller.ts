import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorBusinessLicenseItemDto } from "./dto/create-vendor-business-license-item.dto";
import { UpdateVendorBusinessLicenseItemDto } from "./dto/update-vendor-business-license-item.dto";
import { VendorBusinessLicenseItemService } from "./vendor-business-license-item.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-business-license-items')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBusinessLicenseItemController {
    constructor(private service: VendorBusinessLicenseItemService) { }

    @Get()
    @RequirePermission('vendor-business-license-item.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-business-license-item.create')
    create(@Body() dto: CreateVendorBusinessLicenseItemDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-business-license-item.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorBusinessLicenseItemDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-business-license-item.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

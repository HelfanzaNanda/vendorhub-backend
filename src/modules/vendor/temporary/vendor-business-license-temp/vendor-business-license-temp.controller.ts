import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorBusinessLicenseTempDto } from "./dto/create-vendor-business-license-temp.dto";
import { UpdateVendorBusinessLicenseTempDto } from "./dto/update-vendor-business-license-temp.dto";
import { VendorBusinessLicenseTempService } from "./vendor-business-license-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-business-license-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBusinessLicenseTempController {
    constructor(private service: VendorBusinessLicenseTempService) { }

    @Get()
    @RequirePermission('vendor-business-license-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-business-license-temp.create')
    create(@Body() dto: CreateVendorBusinessLicenseTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-business-license-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorBusinessLicenseTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-business-license-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

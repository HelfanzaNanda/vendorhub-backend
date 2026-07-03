import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorDto } from "./dto/create-vendor.dto";
import { UpdateVendorDto } from "./dto/update-vendor.dto";
import { VendorService } from "./vendor.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendors')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorController {
    constructor(private service: VendorService) { }

    @Get()
    @RequirePermission('vendor.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor.create')
    create(@Body() dto: CreateVendorDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

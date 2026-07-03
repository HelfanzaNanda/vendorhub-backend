import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorTempDto } from "./dto/create-vendor-temp.dto";
import { UpdateVendorTempDto } from "./dto/update-vendor-temp.dto";
import { VendorTempService } from "./vendor-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorTempController {
    constructor(private service: VendorTempService) { }

    @Get()
    @RequirePermission('vendor-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-temp.create')
    create(@Body() dto: CreateVendorTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

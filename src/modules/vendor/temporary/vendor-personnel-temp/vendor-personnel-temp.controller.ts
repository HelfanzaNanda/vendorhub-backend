import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorPersonnelTempDto } from "./dto/create-vendor-personnel-temp.dto";
import { UpdateVendorPersonnelTempDto } from "./dto/update-vendor-personnel-temp.dto";
import { VendorPersonnelTempService } from "./vendor-personnel-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-personnel-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorPersonnelTempController {
    constructor(private service: VendorPersonnelTempService) { }

    @Get()
    @RequirePermission('vendor-personnel-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-personnel-temp.create')
    create(@Body() dto: CreateVendorPersonnelTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-personnel-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorPersonnelTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-personnel-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorUserTempDto } from "./dto/create-vendor-user-temp.dto";
import { UpdateVendorUserTempDto } from "./dto/update-vendor-user-temp.dto";
import { VendorUserTempService } from "./vendor-user-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-user-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorUserTempController {
    constructor(private service: VendorUserTempService) { }

    @Get()
    @RequirePermission('vendor-user-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-user-temp.create')
    create(@Body() dto: CreateVendorUserTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-user-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorUserTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-user-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

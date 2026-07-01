import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { VendorCategoryItemService } from "./vendor-category-item.service";
import { CreateVendorCategoryItemDto } from "./dto/create-vendor-category-item.dto";
import { UpdateVendorCategoryItemDto } from "./dto/update-vendor-category-item.dto";

@Controller('vendor-category-items')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorCategoryItemController {

    constructor(private service: VendorCategoryItemService) { }


    @Get()
    @RequirePermission('vendor-category-item.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-category-item.create')
    create(@Body() dto: CreateVendorCategoryItemDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-category-item.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorCategoryItemDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-category-item.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

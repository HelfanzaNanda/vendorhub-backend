import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { VendorCategoryService } from "./vendor-category.service";
import { CreateVendorCategoryDto } from "./dto/create-vendor-category.dto";
import { UpdateVendorCategoryDto } from "./dto/update-vendor-category.dto";

@Controller('vendor-categories')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorCategoryController {

    constructor(private service: VendorCategoryService) { }


    @Get()
    @RequirePermission('vendor-category.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-category.create')
    create(@Body() dto: CreateVendorCategoryDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-category.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorCategoryDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-category.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { VendorPriorityService } from "./vendor-priority.service";
import { CreateVendorPriorityDto } from "./dto/create-vendor-priority.dto";
import { UpdateVendorPriorityDto } from "./dto/update-vendor-priority.dto";

@Controller('countries')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorPriorityController {

    constructor(private service: VendorPriorityService) { }


    @Get()
    @RequirePermission('vendor-priority.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-priority.create')
    create(@Body() dto: CreateVendorPriorityDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-priority.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorPriorityDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-priority.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorAffiliationDto } from "./dto/create-vendor-affiliation.dto";
import { UpdateVendorAffiliationDto } from "./dto/update-vendor-affiliation.dto";
import { VendorAffiliationService } from "./vendor-affiliation.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-affiliations')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorAffiliationController {
    constructor(private service: VendorAffiliationService) { }

    @Get()
    @RequirePermission('vendor-affiliation.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-affiliation.create')
    create(@Body() dto: CreateVendorAffiliationDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-affiliation.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorAffiliationDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-affiliation.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

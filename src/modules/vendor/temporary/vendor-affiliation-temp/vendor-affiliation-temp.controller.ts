import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorAffiliationTempDto } from "./dto/create-vendor-affiliation-temp.dto";
import { UpdateVendorAffiliationTempDto } from "./dto/update-vendor-affiliation-temp.dto";
import { VendorAffiliationTempService } from "./vendor-affiliation-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-affiliation-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorAffiliationTempController {
    constructor(private service: VendorAffiliationTempService) { }

    @Get()
    @RequirePermission('vendor-affiliation-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-affiliation-temp.create')
    create(@Body() dto: CreateVendorAffiliationTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-affiliation-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorAffiliationTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-affiliation-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

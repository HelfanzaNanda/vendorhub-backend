import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorBankTempDto } from "./dto/create-vendor-bank-temp.dto";
import { UpdateVendorBankTempDto } from "./dto/update-vendor-bank-temp.dto";
import { VendorBankTempService } from "./vendor-bank-temp.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-bank-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBankTempController {
    constructor(private service: VendorBankTempService) { }

    @Get()
    @RequirePermission('vendor-bank-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-bank-temp.create')
    create(@Body() dto: CreateVendorBankTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-bank-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorBankTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-bank-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

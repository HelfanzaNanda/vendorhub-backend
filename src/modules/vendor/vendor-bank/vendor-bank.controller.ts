import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateVendorBankDto } from "./dto/create-vendor-bank.dto";
import { UpdateVendorBankDto } from "./dto/update-vendor-bank.dto";
import { VendorBankService } from "./vendor-bank.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('vendor-banks')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBankController {
    constructor(private service: VendorBankService) { }

    @Get()
    @RequirePermission('vendor-bank.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-bank.create')
    create(@Body() dto: CreateVendorBankDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-bank.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorBankDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-bank.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

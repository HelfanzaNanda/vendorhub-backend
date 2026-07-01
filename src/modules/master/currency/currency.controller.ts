import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { CurrencyService } from "./currency.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('currencies')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CurrencyController {

    constructor(private service: CurrencyService) { }


    @Get()
    @RequirePermission('currency.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('currency.create')
    create(@Body() dto: CreateCurrencyDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('currency.update')
    update(@Param('id') id: number, @Body() dto: UpdateCurrencyDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('currency.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

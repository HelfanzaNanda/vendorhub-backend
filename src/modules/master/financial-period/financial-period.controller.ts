import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateFinancialPeriodDto } from "./dto/create-financial-period.dto";
import { UpdateFinancialPeriodDto } from "./dto/update-financial-period.dto";
import { FinancialPeriodService } from "./financial-period.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('financial-periods')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class FinancialPeriodController {

    constructor(private service: FinancialPeriodService) { }


    @Get()
    @RequirePermission('financial-period.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('financial-period.create')
    create(@Body() dto: CreateFinancialPeriodDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('financial-period.update')
    update(@Param('id') id: number, @Body() dto: UpdateFinancialPeriodDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('financial-period.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

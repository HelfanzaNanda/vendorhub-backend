import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateBankDto } from "./dto/create-bank.dto";
import { UpdateBankDto } from "./dto/update-bank.dto";
import { BankService } from "./bank.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('banks')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class BankController {

    constructor(private service: BankService) { }


    @Get()
    @RequirePermission('bank.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('bank.create')
    create(@Body() dto: CreateBankDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('bank.update')
    update(@Param('id') id: number, @Body() dto: UpdateBankDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('bank.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

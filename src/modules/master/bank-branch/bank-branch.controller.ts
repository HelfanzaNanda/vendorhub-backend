import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateBankBranchDto } from "./dto/create-bank-branch.dto";
import { UpdateBankBranchDto } from "./dto/update-bank-branch.dto";
import { BankBranchService } from "./bank-branch.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('bank-branches')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class BankBranchController {

    constructor(private service: BankBranchService) { }


    @Get()
    @RequirePermission('bank-branch.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('bank-branch.create')
    create(@Body() dto: CreateBankBranchDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('bank-branch.update')
    update(@Param('id') id: number, @Body() dto: UpdateBankBranchDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('bank-branch.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

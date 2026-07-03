import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { CreateTermsConditionDto } from "./dto/create-term-condition.dto";
import { UpdateTermsConditionDto } from "./dto/update-term-condition.dto";
import { TermsConditionService } from "./term-condition.service";
import { Public } from "@common/decorators/public.decorator";

@Controller('terms-conditions')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class TermsConditionController {

    constructor(private service: TermsConditionService) { }


    @Get()
    @RequirePermission('terms.condition.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Get('latest')
    @Public()
    latest() {
        return this.service.latest();
    }

    @Post()
    @RequirePermission('terms.condition.create')
    create(@Body() dto: CreateTermsConditionDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('terms.condition.update')
    update(@Param('id') id: number, @Body() dto: UpdateTermsConditionDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('terms.condition.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

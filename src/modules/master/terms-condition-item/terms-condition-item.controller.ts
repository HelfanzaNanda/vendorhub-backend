import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { TermsConditionItemService } from "./terms-condition-item.service";
import { CreateTermsConditionItemDto } from "./dto/create-terms-condition-item.dto";
import { UpdateTermsConditionItemDto } from "./dto/update-terms-condition-item.dto";

@Controller('terms-conditon-items')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class TermsConditionItemController {

    constructor(private service: TermsConditionItemService) { }


    @Get()
    @RequirePermission('terms.condition.item.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('terms.condition.item.create')
    create(@Body() dto: CreateTermsConditionItemDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('terms.condition.item.update')
    update(@Param('id') id: number, @Body() dto: UpdateTermsConditionItemDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('terms.condition.item.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

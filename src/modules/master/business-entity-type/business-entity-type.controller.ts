import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateBusinessEntityTypeDto } from "./dto/create-business-entity-type.dto";
import { UpdateBusinessEntityTypeDto } from "./dto/update-business-entity-type.dto";
import { BusinessEntityTypeService } from "./business-entity-type.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('business-entity-types')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class BusinessEntityTypeController {

    constructor(private service: BusinessEntityTypeService) { }


    @Get()
    @RequirePermission('business-entity-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('business-entity-type.create')
    create(@Body() dto: CreateBusinessEntityTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('business-entity-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateBusinessEntityTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('business-entity-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

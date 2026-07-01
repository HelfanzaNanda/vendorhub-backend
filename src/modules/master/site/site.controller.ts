import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateSiteDto } from "./dto/create-site.dto";
import { UpdateSiteDto } from "./dto/update-site.dto";
import { SiteService } from "./site.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('sites')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class SiteController {

    constructor(private service: SiteService) { }


    @Get()
    @RequirePermission('site.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('site.create')
    create(@Body() dto: CreateSiteDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('site.update')
    update(@Param('id') id: number, @Body() dto: UpdateSiteDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('site.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

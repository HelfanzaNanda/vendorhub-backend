import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateCityDto } from "./dto/create-city.dto";
import { UpdateCityDto } from "./dto/update-city.dto";
import { CityService } from "./city.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('cities')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CityController {

    constructor(private service: CityService) { }


    @Get()
    @RequirePermission('city.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('city.create')
    create(@Body() dto: CreateCityDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('city.update')
    update(@Param('id') id: number, @Body() dto: UpdateCityDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('city.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

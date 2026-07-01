import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { CountryService } from "./country.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('countries')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CountryController {

    constructor(private service: CountryService) { }


    @Get()
    @RequirePermission('country.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('country.create')
    create(@Body() dto: CreateCountryDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('country.update')
    update(@Param('id') id: number, @Body() dto: UpdateCountryDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('country.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateCompanyPersonnelTypeDto } from "./dto/create-company-personnel-type.dto";
import { UpdateCompanyPersonnelTypeDto } from "./dto/update-company-personnel-type.dto";
import { CompanyPersonnelTypeService } from "./company-personnel-type.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('company-personnel-types')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CompanyPersonnelTypeController {
    constructor(private service: CompanyPersonnelTypeService) { }

    @Get()
    @RequirePermission('company-personnel-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('company-personnel-type.create')
    create(@Body() dto: CreateCompanyPersonnelTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('company-personnel-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateCompanyPersonnelTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('company-personnel-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

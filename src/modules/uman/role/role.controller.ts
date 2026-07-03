import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PermissionsGuard } from "@common/guards/permissions.guard";
import { RoleService } from "./role.service";

@Controller('roles')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class RoleController {

    constructor(private service: RoleService) { }


    @Get()
    @RequirePermission('roles.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('roles.create')
    create(@Body() dto: CreateRoleDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('roles.update')
    update(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('roles.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

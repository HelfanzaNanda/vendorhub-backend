import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { WorkflowTypeService } from "./workflow-type.service";
import { CreateWorkflowTypeDto } from "./dto/create-workflow-type.dto";
import { UpdateWorkflowTypeDto } from "./dto/update-workflow-type.dto";

@Controller('countries')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowTypeController {

    constructor(private service: WorkflowTypeService) { }


    @Get()
    @RequirePermission('workflow-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-type.create')
    create(@Body() dto: CreateWorkflowTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateWorkflowTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

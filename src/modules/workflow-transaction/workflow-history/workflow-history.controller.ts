import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { WorkflowHistoryService } from './workflow-history.service';
import { CreateWorkflowHistoryDto } from './dto/create-workflow-history.dto';
import { UpdateWorkflowHistoryDto } from './dto/update-workflow-history.dto';

@Controller('workflow-historys')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowHistoryController {
    constructor(private service: WorkflowHistoryService) {}

    @Get()
    @RequirePermission('workflow-history.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-history.create')
    create(@Body() dto: CreateWorkflowHistoryDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-history.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowHistoryDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-history.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

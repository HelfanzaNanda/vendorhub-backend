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
import { WorkflowService } from './workflow.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@Controller('workflows')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowController {
    constructor(private service: WorkflowService) {}

    @Get()
    @RequirePermission('workflow.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow.create')
    create(@Body() dto: CreateWorkflowDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

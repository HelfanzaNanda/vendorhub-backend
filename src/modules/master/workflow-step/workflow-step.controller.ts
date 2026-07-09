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
import { WorkflowStepService } from './workflow-step.service';
import { CreateWorkflowStepDto } from './dto/create-workflow-step.dto';
import { UpdateWorkflowStepDto } from './dto/update-workflow-step.dto';

@Controller('workflow-steps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowStepController {
    constructor(private service: WorkflowStepService) {}

    @Get()
    @RequirePermission('workflow-step.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-step.create')
    create(@Body() dto: CreateWorkflowStepDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-step.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowStepDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-step.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

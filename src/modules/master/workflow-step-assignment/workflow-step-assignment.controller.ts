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
import { WorkflowStepAssignmentService } from './workflow-step-assignment.service';
import { CreateWorkflowStepAssignmentDto } from './dto/create-workflow-step-assignment.dto';
import { UpdateWorkflowStepAssignmentDto } from './dto/update-workflow-step-assignment.dto';

@Controller('workflow-step-assignments')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowStepAssignmentController {
    constructor(private service: WorkflowStepAssignmentService) {}

    @Get()
    @RequirePermission('workflow-step-assignment.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-step-assignment.create')
    create(@Body() dto: CreateWorkflowStepAssignmentDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-step-assignment.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowStepAssignmentDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-step-assignment.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

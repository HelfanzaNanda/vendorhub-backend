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
import { WorkflowTransactionStepService } from './workflow-transaction-step.service';
import { CreateWorkflowTransactionStepDto } from './dto/create-workflow-transaction-step.dto';
import { UpdateWorkflowTransactionStepDto } from './dto/update-workflow-transaction-step.dto';

@Controller('workflow-transaction-steps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowTransactionStepController {
    constructor(private service: WorkflowTransactionStepService) {}

    @Get()
    @RequirePermission('workflow-transaction-step.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-transaction-step.create')
    create(@Body() dto: CreateWorkflowTransactionStepDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-transaction-step.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowTransactionStepDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-transaction-step.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

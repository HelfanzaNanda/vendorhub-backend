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
import { WorkflowTransactionService } from './workflow-transaction.service';
import { CreateWorkflowTransactionDto } from './dto/create-workflow-transaction.dto';
import { UpdateWorkflowTransactionDto } from './dto/update-workflow-transaction.dto';

@Controller('workflow-transactions')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkflowTransactionController {
    constructor(private service: WorkflowTransactionService) {}

    @Get()
    @RequirePermission('workflow-transaction.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('workflow-transaction.create')
    create(@Body() dto: CreateWorkflowTransactionDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('workflow-transaction.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkflowTransactionDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('workflow-transaction.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

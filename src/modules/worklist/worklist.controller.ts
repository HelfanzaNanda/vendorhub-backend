import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { WorklistService } from './worklist.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { CurrentUser } from '@common/decorators/current-user.decorator';
import { WorklistQueryDto } from './dto/worklist-query.dto';
import { PermissionsGuard } from '@common/guards/permissions.guard';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';

@Controller('worklists')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorklistController {
    constructor(private readonly worklistService: WorklistService) {}

    @Get('summary')
    async getSummary(
        @CurrentUser() user: JwtPayload,
        @Query('workflowCode') workflowCode?: string
    ) {
        return this.worklistService.getSummary(user, workflowCode);
    }

    @Get()
    async getList(
        @CurrentUser() user: JwtPayload,
        @Query() query: WorklistQueryDto
    ) {
        return this.worklistService.getList(user, query);
    }

    @Get(':workflowTransactionId')
    async getDetail(
        @Param('workflowTransactionId') workflowTransactionId: number
    ) {
        return this.worklistService.getDetail(workflowTransactionId);
    }

    @Get(':workflowTransactionId/history')
    async getHistory(
        @Param('workflowTransactionId') workflowTransactionId: number
    ) {
        return this.worklistService.getHistory(workflowTransactionId);
    }
}

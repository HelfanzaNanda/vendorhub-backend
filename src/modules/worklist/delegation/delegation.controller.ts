import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { PermissionsGuard } from "@common/guards/permissions.guard";
import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { DelegationService } from "./delegation.service";
import { CurrentUser } from "@common/decorators/current-user.decorator";
import { JwtPayload } from "@modules/auth/interfaces/jwt-payload.interface";

@Controller('delegations')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class DelegationController {
    constructor(
        private readonly delegationService: DelegationService,
    ) {}

    @Get(':workflowTransactionStepId')
    async getDelegateUsers(
        @Param('workflowTransactionStepId') workflowTransactionStepId: number,
        @CurrentUser() user: JwtPayload
    ) {
        return this.delegationService.getDelegationUsers(workflowTransactionStepId);
    }

    @Post(':workflowTransactionStepId')
    async delegate(
        @Param('workflowTransactionStepId') workflowTransactionStepId: number,
        @Body('delegateUserId') delegateUserId: number,
        @CurrentUser() user: JwtPayload
    ) {
        return this.delegationService.delegate(workflowTransactionStepId, delegateUserId, user);
    }
}


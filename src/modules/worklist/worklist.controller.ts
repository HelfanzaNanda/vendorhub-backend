import { Controller, Get, Param, Query, UseGuards, Post, Body } from '@nestjs/common';
import { WorklistService } from './worklist.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { CurrentUser } from '@common/decorators/current-user.decorator';
import { GetWorklistDetailDto, WorklistQueryDto } from './dto/worklist-query.dto';
import { PermissionsGuard } from '@common/guards/permissions.guard';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { SaveReviewDto } from './dto/save-review.dto';
import { SubmitWorklistDto } from './dto/submit-worklist.dto';

// Services
import { WorklistCompanyService } from './review/company/worklist-company.service';
import { WorklistPersonnelService } from './review/personnel/worklist-personnel.service';
import { WorklistBankService } from './review/bank/worklist-bank.service';
import { WorklistAffiliationService } from './review/affiliation/worklist-affiliation.service';
import { WorklistBusinessLicenseService } from './review/business-license/worklist-business-license.service';
import { WorklistCompetencyService } from './review/competency/worklist-competency.service';
import { WorklistDocumentService } from './review/document/worklist-document.service';
import { WorklistFinancialReportService } from './review/financial-report/worklist-financial-report.service';
import { WorklistUserAccessService } from './review/user-access/worklist-user.service';
import { DelegationService } from './delegation/delegation.service';

@Controller('worklists')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorklistController {
    constructor(
        private readonly worklistService: WorklistService,
        private readonly worklistCompanyService: WorklistCompanyService,
        private readonly worklistPersonnelService: WorklistPersonnelService,
        private readonly worklistUserAccessService: WorklistUserAccessService,
        private readonly worklistBankService: WorklistBankService,
        private readonly worklistAffiliationService: WorklistAffiliationService,
        private readonly worklistBusinessLicenseService: WorklistBusinessLicenseService,
        private readonly worklistCompetencyService: WorklistCompetencyService,
        private readonly worklistDocumentService: WorklistDocumentService,
        private readonly worklistFinancialReportService: WorklistFinancialReportService,
    ) {}

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
        @Param('workflowTransactionId') workflowTransactionId: number,
        @Query() dto: GetWorklistDetailDto,
        @CurrentUser() user: JwtPayload,
    ) {
        if (dto.tab === 'company') return this.worklistCompanyService.get(workflowTransactionId);
        if (dto.tab === 'personnel') return this.worklistPersonnelService.get(workflowTransactionId, dto.personnelType);
        if (dto.tab === 'user-access') return this.worklistUserAccessService.get(workflowTransactionId);
        if (dto.tab === 'banks') return this.worklistBankService.get(workflowTransactionId);
        if (dto.tab === 'affiliations') return this.worklistAffiliationService.get(workflowTransactionId);
        if (dto.tab === 'business-licenses') return this.worklistBusinessLicenseService.get(workflowTransactionId);
        if (dto.tab === 'competencies') return this.worklistCompetencyService.get(workflowTransactionId);
        if (dto.tab === 'documents') return this.worklistDocumentService.get(workflowTransactionId, dto.documentType);
        if (dto.tab === 'financial-reports') return this.worklistFinancialReportService.get(workflowTransactionId);

        return this.worklistService.getDetail(workflowTransactionId, user);
    }

    @Get(':workflowTransactionId/histories')
    async getHistory(
        @Param('workflowTransactionId') workflowTransactionId: number
    ) {
        return this.worklistService.getHistories(workflowTransactionId);
    }

    @Post(':workflowTransactionId/reviews')
    async saveReview(
        @Param('workflowTransactionId') workflowTransactionId: number,
        @Body() dto: SaveReviewDto,
        @CurrentUser() user: JwtPayload
    ) {
        return this.worklistService.saveReview(workflowTransactionId, dto, user);
    }

    @Post(':workflowTransactionId/submit')
    async submit(
        @Param('workflowTransactionId') workflowTransactionId: number,
        @Body() dto: SubmitWorklistDto,
        @CurrentUser() user: JwtPayload
    ) {
        return this.worklistService.submitWorklist(workflowTransactionId, dto, user);
    }
}


import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { WorklistRepository } from './repositories/worklist.repository';
import { WorklistCard, WorklistQueryDto } from './dto/worklist-query.dto';
import { WorklistMapper } from './mapper/worklist.mapper';
import { paginate } from '@common/pagination/pagination.helper';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { SlaService } from '@modules/workflow-transaction/workflow-engine/services/sla.service';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowStatusUtil } from './utils/workflow-status.util';
import { formatQuery } from 'src/utils/query.util';
import { DateUtil } from '@common/utils/date.util';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
import { DataSource } from 'typeorm';
import { SaveReviewDto, ReviewEntity } from './dto/save-review.dto';
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
import { VendorUserTemp } from '@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity';
import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
import { VendorCompetencyTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity';
import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';

@Injectable()
export class WorklistService {
    constructor(
        private readonly worklistRepository: WorklistRepository, 
        private readonly slaService: SlaService,
        private readonly dataSource: DataSource
    ) {}

    async getSummary(user: JwtPayload, workflowCode?: string) {
        return this.worklistRepository.findSummary(user, workflowCode);
    }

    async getList(user: JwtPayload, query: WorklistQueryDto) {
        let qb;
        switch (query.card) {
            case WorklistCard.IN_PROGRESS:
                qb = this.worklistRepository.findInProgress(user, query.workflowCode);
                break;
            case WorklistCard.COMPLETED:
                qb = this.worklistRepository.findCompleted(user, query.workflowCode);
                break;
            case WorklistCard.REJECTED:
                qb = this.worklistRepository.findRejected(user, query.workflowCode);
                break;
            case WorklistCard.OVER_SLA:
                qb = this.worklistRepository.findOverSla(user, query.workflowCode);
                break;
            case WorklistCard.NEED_MY_REVIEW:
            default:
                qb = this.worklistRepository.findNeedMyReview(user, query.workflowCode);
                break;
        }

        // Resolve business information in Service layer
        qb.leftJoin('wt.vendorTemp', 'vt')
          .leftJoin('vt.vendor', 'v')
          .leftJoin('v.vendorCompany', 'vc')
          .addSelect([
              'vt.id',
              'vt.requestNo',
              'v.id',
              'vc.id',
              'vc.companyName',
              'v.vendorType'
          ]);

        const fields = {
            requestNo: { column: 'vt.requestNo', searchable: true, orderable: true },
            vendorName: { column: 'vc.companyName', searchable: true, orderable: true },
            vendorType: { column: 'v.vendorType', searchable: true, orderable: true },
            area: { column: 'a.name', searchable: true, orderable: true },
            submittedDate: { column: 'wt.submittedAt', searchable: false, orderable: true },
            status: { column: 'wt.status', searchable: false, orderable: true },
        };

        const result = await paginate(qb, query, fields);
        result.data = await Promise.all(result.data.map(async (item : WorkflowTransaction) => {
            const sla = await this.slaService.calculate(
                item.currentTransactionStep.assignedAt || new Date(),
                item.currentTransactionStep.actionAt || new Date(),
                item.currentTransactionStep.workflowStep.slaDuration,
                item.currentTransactionStep.workflowStep.useWorkingCalendar,
            );
            return WorklistMapper.toListDto(item, sla);
        }));
        return result;
    }

    async getDetail(id: number, user: JwtPayload) {
        // Resolve business information for detail
        const qb = this.worklistRepository.findDetail(id)
            .leftJoin('wt.vendorTemp', 'vt')
            .leftJoin('vt.vendor', 'v')
            .leftJoin('v.vendorCompany', 'vc')
            .addSelect([
                'vt.id',
                'vt.requestNo',
                'v.id',
                'v.vendorType',
                'vc.id',
                'vc.companyName'
            ]);
            
        const wt = await qb.getOne();

        if (!wt) {
            throw new NotFoundException(`Workflow transaction ${id} not found`);
        }

        const approvers = await this.worklistRepository.queryGetApprovers(id).getMany();
        
        const currentWts = wt.currentTransactionStep;
        
        // canReview
        let canReview = false;
        if (wt.status === 'IN_PROGRESS' && currentWts?.status === 'WAITING' && currentWts.workflowStep?.code === 'ADMIN_OPS') {
            canReview = wt.site?.areaId === user.internalAreaId;
        }

        // canSubmit
        let canSubmit = false;
        if (wt.status === 'IN_PROGRESS' && currentWts?.status === 'WAITING') {
            const stepCode = currentWts.workflowStep?.code;
            if (stepCode === 'ADMIN_OPS') {
                canSubmit = wt.site?.areaId === user.internalAreaId;
            } else if (stepCode === 'APPROVER_1' || stepCode === 'APPROVER_2') {
                canSubmit = currentWts.userId === user.sub || currentWts.delegationUserId === user.sub;
            }
        }

        // canDelegate
        let canDelegate = false;
        if (wt.status === 'IN_PROGRESS' && currentWts?.status === 'WAITING') {
            if (currentWts.userId === user.sub || currentWts.delegationUserId === user.sub) {
                canDelegate = true; // Assuming true if current approver
            }
        }

        return {
            workflowInfo: {
                workflowCode: wt.workflow?.code,
                workflowName: wt.workflow?.name,
                requestNo: wt.vendorTemp?.requestNo,
                vendorName: wt.vendorTemp?.vendor?.vendorCompany?.companyName || (wt.vendorTemp as any)?.vendorName,
                vendorType: wt.vendorTemp?.vendor?.vendorType,
                site: wt.site?.name,
                currentStep: wt.currentTransactionStep?.workflowStep?.name,
                workflow : wt.workflow.name,
                status : WorkflowStatusUtil.generateDisplayStatus(wt.status, wt.currentTransactionStep?.workflowStep?.code),
                submittedBy : `${wt.requester?.firstname} ${wt.requester?.lastname}`,
                submittedDate : DateUtil.formatDateTime(wt.createdAt),
                dueDate : DateUtil.formatDateTime(wt.currentTransactionStep?.dueAt),
            },
            approvers: approvers.map((a) => ({
                user : {
                    name: `${a.user?.firstname} ${a.user?.lastname}`,
                    email : a.user?.email,
                },
                delegatedUser : a.delegationUser ? {
                    name: `${a.delegationUser?.firstname} ${a.delegationUser?.lastname}`,
                    email : a.delegationUser?.email,
                } : null,
                role: a.workflowStep?.name,
                actionAt: DateUtil.formatDateTime(a.actionAt),
                status : a.status,
                remarks: a.remarks
            })),
            permissions: {
                canReview,
                canSubmit,
                canDelegate
            }
        };
    }

    async getHistories(id: number) {
        const histories = await this.worklistRepository.findHistory(id);
        return histories.map((h: WorkflowHistory) => ({
            step: h.workflowTransactionStep?.workflowStep?.sequence,
            stepName: h.workflowTransactionStep?.workflowStep?.name,
            actor: `${h.actor?.firstname} ${h.actor?.lastname}`,
            action: h.action,
            remarks: h.remarks,
            actionAt: DateUtil.formatDateTime(h.actionAt),
        }));
    }

    async saveReview(workflowTransactionId: number, dto: SaveReviewDto, user: JwtPayload) {
        const wt = await this.dataSource.getRepository(WorkflowTransaction).findOne({
            where: { id: workflowTransactionId },
            relations: ['site', 'currentTransactionStep', 'currentTransactionStep.workflowStep']
        });

        if (!wt) {
            throw new NotFoundException(`WorkflowTransaction not found`);
        }

        const currentStep = wt.currentTransactionStep;
        if (!currentStep) {
            throw new NotFoundException(`Current active WorkflowTransactionStep not found`);
        }

        if (currentStep.workflowStep?.code !== 'ADMIN_OPS') {
            throw new ForbiddenException(`Only ADMIN_OPS can review this step`);
        }

        if (wt.site?.areaId !== user.internalAreaId) {
            throw new ForbiddenException(`You can only review vendors in your area`);
        }

        let TargetEntity: any;
        switch (dto.sectionId) {
            case ReviewEntity.VENDOR_COMPANY: TargetEntity = VendorCompanyTemp; break;
            case ReviewEntity.VENDOR_PERSONNEL: TargetEntity = VendorPersonnelTemp; break;
            case ReviewEntity.VENDOR_USER_ACCESS: TargetEntity = VendorUserTemp; break;
            case ReviewEntity.VENDOR_BANK: TargetEntity = VendorBankTemp; break;
            case ReviewEntity.VENDOR_AFFILIATION: TargetEntity = VendorAffiliationTemp; break;
            case ReviewEntity.VENDOR_BUSINESS_LICENSE: TargetEntity = VendorBusinessLicenseTemp; break;
            case ReviewEntity.VENDOR_COMPETENCY: TargetEntity = VendorCompetencyTemp; break;
            case ReviewEntity.VENDOR_DOCUMENT: TargetEntity = VendorDocumentTemp; break;
            case ReviewEntity.VENDOR_FINANCIAL_REPORT: TargetEntity = VendorFinancialReportTemp; break;
            default:
                throw new NotFoundException(`Unknown section: ${dto.sectionId}`);
        }

        return this.dataSource.transaction(async (manager) => {
            const record: any = await manager.findOne(TargetEntity, {
                where: { id: dto.recordId }
            });

            if (!record) {
                throw new NotFoundException(`${dto.sectionId} with id ${dto.recordId} not found`);
            }

            if (record.reviewStatus === dto.status && record.reviewNotes === dto.remark) {
                return record; // No change needed
            }

            record.reviewStatus = dto.status;
            record.reviewNotes = dto.remark || null;

            await manager.save(TargetEntity, record);
            
            return record;
        });
    }
}

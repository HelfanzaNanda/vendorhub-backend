import { Injectable, NotFoundException } from '@nestjs/common';
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

@Injectable()
export class WorklistService {
    constructor(
        private readonly worklistRepository: WorklistRepository, 
        private readonly slaService: SlaService
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

    async getDetail(id: number) {
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
            }))
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
}

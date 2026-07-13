import { WorkflowTransactionStatus } from '@common/enums/workflow-transaction.enum';
import { DateUtil } from '@common/utils/date.util';
import { SlaResult } from '@modules/workflow-transaction/workflow-engine/services/dto/result-sla.dto';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import dayjs from 'dayjs';

export class WorklistMapper {
    static toListDto(entity: WorkflowTransaction, sla: SlaResult) {
        return {
            id: entity.id,
            workflowCode: entity.workflow?.code,
            workflowName: entity.workflow?.name,
            vendorType: entity.vendorTemp?.vendor?.vendorType,
            requestNo: entity.vendorTemp?.requestNo,
            vendorId: entity.vendorTemp?.vendor?.id,
            vendorName: entity.vendorTemp?.vendor?.vendorCompany?.companyName || (entity.vendorTemp as any)?.vendorName,
            submittedDate: DateUtil.formatDateTime(entity.submittedAt),
            assignedDate: DateUtil.formatDateTime(entity.currentTransactionStep?.assignedAt),
            dueDate: DateUtil.formatDateTime(entity.currentTransactionStep?.dueAt),
            slaPic: `${sla.actual}/${sla.target} ${entity.currentTransactionStep.workflowStep.slaUnit} (${sla.isOverSla ? 'Overdue' : 'OK'})`,
            site : entity.site?.name,
            currentStep: {
                code : entity.currentTransactionStep.workflowStep.code,
                name : entity.currentTransactionStep.workflowStep.name,
            },
            assigneeUser: entity.currentTransactionStep.user ? {
                id : entity.currentTransactionStep.user.id,
                name : `${entity.currentTransactionStep.user.firstname} ${entity.currentTransactionStep.user.lastname}`,
            } : null,
            delegationUser: entity.currentTransactionStep.delegationUser ? {
                id : entity.currentTransactionStep.delegationUser.id,
                name : `${entity.currentTransactionStep.delegationUser.firstname} ${entity.currentTransactionStep.delegationUser.lastname}`,
            } : null,
            overBy: this.calculateOverBy(entity.currentTransactionStep.dueAt),
        };
    }

    static calculateOverBy(dueAt? : Date) {
        if (!dueAt) {
            return null;
        }
        const now = dayjs();
        const diffMinutes = now.diff(dueAt, 'minute');

        let overBy: string | null = null;

        if (diffMinutes > 0) {
            const days = Math.floor(diffMinutes / (60 * 24));
            const hours = Math.floor((diffMinutes % (60 * 24)) / 60);

            if (days > 0) {
                overBy = `${days} Day${days > 1 ? 's' : ''}`;
            } else if (hours > 0) {
                overBy = `${hours} Hour${hours > 1 ? 's' : ''}`;
            } else {
                overBy = `${diffMinutes} Minute${diffMinutes > 1 ? 's' : ''}`;
            }
        }

        return overBy;
    }
}

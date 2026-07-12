import { WorkflowTransactionStatus } from '@common/enums/workflow-transaction.enum';
import { DateUtil } from '@common/utils/date.util';
import { SlaResult } from '@modules/workflow-transaction/workflow-engine/services/dto/result-sla.dto';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';

export class WorklistMapper {
    static toListDto(entity: WorkflowTransaction, sla: SlaResult, status: string) {
        return {
            workflowTransactionId: entity.id,
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
            status: status
        };
    }
}

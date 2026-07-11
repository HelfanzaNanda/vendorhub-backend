import { WorkflowTransactionStatus } from '@common/enums/workflow-transaction.enum';
import { WorkflowStepCode } from '@common/enums/workflow.enum';

export class WorkflowStatusUtil {
    static generateDisplayStatus(
        status: WorkflowTransactionStatus,
        workflowStepCode?: string,
    ): string {
        switch (status) {
            case WorkflowTransactionStatus.IN_PROGRESS:
                return this.getInProgressStatus(workflowStepCode);

            case WorkflowTransactionStatus.REVISED:
                return 'Waiting for Vendor Revision';

            case WorkflowTransactionStatus.COMPLETED:
                return 'Completed';

            case WorkflowTransactionStatus.REJECTED:
                return 'Rejected';

            default:
                return status;
        }
    }

    private static getInProgressStatus(workflowStepCode?: string): string {
        switch (workflowStepCode) {
            case WorkflowStepCode.ADMIN_OPS:
                return 'Waiting for Admin Ops Approval';

            case WorkflowStepCode.APPROVER_1:
                return 'Waiting for Approver 1 Approval';

            case WorkflowStepCode.APPROVER_2:
                return 'Waiting for Approver 2 Approval';

            default:
                return `In Progress`;
        }
    }
}
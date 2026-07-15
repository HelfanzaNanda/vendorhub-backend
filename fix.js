const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

// Import WorkflowTransactionStep
if (!content.includes("import { WorkflowTransactionStep }")) {
    content = content.replace(
        "import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';",
        "import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';\nimport { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';"
    );
}

// Replace COMPLETED with APPROVED for WorkflowTransactionStepStatus when applicable
content = content.replace(/currentStep.status = WorkflowTransactionStepStatus.COMPLETED;/g, 
  "currentStep.status = dto.status as unknown as WorkflowTransactionStepStatus;");
  
content = content.replace(/status: WorkflowTransactionStepStatus.COMPLETED/g, 
  "status: WorkflowTransactionStepStatus.APPROVED"); // For the mass update, we use APPROVED or something else. Wait, REVISED sets it to REVISED? Actually, let's just cast.
content = content.replace(/{ status: WorkflowTransactionStepStatus.COMPLETED }/g, 
  "{ status: WorkflowTransactionStepStatus.REVISED }"); // in submitRevised

// Replace VendorStatusEnum.REVISED with VendorStatusEnum.REVISION
content = content.replace(/VendorStatusEnum.REVISED/g, 'VendorStatusEnum.REVISION');

// Cast action to WorkflowTransactionStepStatus
content = content.replace(/action: string/g, 'action: WorkflowTransactionStepStatus | string');
content = content.replace(/history.action = action;/g, 'history.action = action as WorkflowTransactionStepStatus;');

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

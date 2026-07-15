const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

// Remove duplicate BadRequestException
content = content.replace("import { BadRequestException } from '@nestjs/common';\n", "");

// Remove actionBy and isCurrent
content = content.replace(/currentStep.actionBy = user.sub;\n/g, "");
content = content.replace(/currentStep.isCurrent = (true|false);\n/g, "");
content = content.replace(/nextStep.isCurrent = (true|false);\n/g, "");
content = content.replace(/adminStep.isCurrent = (true|false);\n/g, "");
content = content.replace(/, isCurrent: false /g, "");

// Add ! to wt where it's passed as arg
content = content.replace(/this.validatePermission\(wt, user\);/g, "this.validatePermission(wt!, user);");
content = content.replace(/this.submitApproved\(manager, wt, currentStep, dto, user\);/g, "this.submitApproved(manager, wt!, currentStep, dto, user);");
content = content.replace(/this.submitRejected\(manager, wt, currentStep, dto, user\);/g, "this.submitRejected(manager, wt!, currentStep, dto, user);");
content = content.replace(/this.submitRevised\(manager, wt, currentStep, dto, user\);/g, "this.submitRevised(manager, wt!, currentStep, dto, user);");

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

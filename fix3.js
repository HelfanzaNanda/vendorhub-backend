const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

// Add ! to wt where it's passed as arg
content = content.replace(/const currentStep = wt.currentTransactionStep;/g, "const currentStep = wt!.currentTransactionStep;");
content = content.replace(/await this.validateReview\(wt.id\);/g, "await this.validateReview(wt!.id);");

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

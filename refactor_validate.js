const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

const validateReviewBody = `
    private countPendingReviews(items: any[]): number {
        if (!items || !Array.isArray(items)) return 0;
        return items.filter(x => 
            x.action !== 'NO_CHANGE' && 
            x.permissions?.showReviewSection === true && 
            x.reviewStatus == null
        ).length;
    }

    private async validateReview(workflowTransactionId: number) {
        const companyService = this.moduleRef.get(WorklistCompanyService, { strict: false });
        const personnelService = this.moduleRef.get(WorklistPersonnelService, { strict: false });
        const bankService = this.moduleRef.get(WorklistBankService, { strict: false });
        const affiliationService = this.moduleRef.get(WorklistAffiliationService, { strict: false });
        const businessLicenseService = this.moduleRef.get(WorklistBusinessLicenseService, { strict: false });
        const competencyService = this.moduleRef.get(WorklistCompetencyService, { strict: false });
        const documentService = this.moduleRef.get(WorklistDocumentService, { strict: false });
        const financialReportService = this.moduleRef.get(WorklistFinancialReportService, { strict: false });
        const userAccessService = this.moduleRef.get(WorklistUserAccessService, { strict: false });

        const configs = [
            { key: 'company', service: companyService, method: 'get', args: [workflowTransactionId] },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'BOARD_OF_DIRECTORS'], group: 'BOARD_OF_DIRECTORS' },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'SHAREHOLDER'], group: 'SHAREHOLDER' },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'AUTHORIZED_SIGNER'], group: 'AUTHORIZED_SIGNER' },
            { key: 'userAccess', service: userAccessService, method: 'get', args: [workflowTransactionId] },
            { key: 'bank', service: bankService, method: 'get', args: [workflowTransactionId] },
            { key: 'affiliation', service: affiliationService, method: 'get', args: [workflowTransactionId] },
            { key: 'businessLicense', service: businessLicenseService, method: 'get', args: [workflowTransactionId] },
            { key: 'competency', service: competencyService, method: 'get', args: [workflowTransactionId] },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'CERTIFICATION'], group: 'CERTIFICATION' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'COMPANY_POLICY'], group: 'COMPANY_POLICY' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'SOP'], group: 'SOP' },
            { key: 'financialReport', service: financialReportService, method: 'get', args: [workflowTransactionId] },
        ];

        const reviewValidation: any = {};
        let hasPending = false;

        for (const config of configs) {
            let data = [];
            try {
                // If a service doesn't have the exact method signature or the arguments are unused, it will still work
                data = await config.service[config.method](...config.args);
            } catch (err) {
                // Ignore if tab fails (e.g. not found)
                data = [];
            }
            
            const pending = this.countPendingReviews(data);
            
            if (!reviewValidation[config.key]) {
                reviewValidation[config.key] = { pendingReviews: 0 };
            }
            
            reviewValidation[config.key].pendingReviews += pending;
            
            if (config.group) {
                if (!reviewValidation[config.key].groups) {
                    reviewValidation[config.key].groups = {};
                }
                reviewValidation[config.key].groups[config.group] = pending;
            }

            if (pending > 0) hasPending = true;
        }

        if (hasPending) {
            throw new BadRequestException({
                message: 'Review belum selesai.',
                reviewValidation
            });
        }
    }
`;

content = content.replace(/private async validateReview\(workflowTransactionId: number\) {[\s\S]*?private async submitApproved/m, validateReviewBody + '\n    private async submitApproved');

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

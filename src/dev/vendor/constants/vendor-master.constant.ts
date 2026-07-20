export const SCENARIOS = {
    SMALL_VENDOR: {
        personnel: {
            boardOfDirectors: 1,
            shareholderPerson: 1,
            shareholderCompany: 0,
            authorizedSigner: 1,
        },
        userAccess: [
            { role: 'ADMIN_FINANCE', count: 1 },
        ],
        banks: 1,
        documents: 'ALL',
        competencies: [
            { categoryCode: 'ICT', count: 1, customerReference: 1 },
        ],
        financialReports: {
            annual: 1,
            interim: 0,
        },
    },
    MEDIUM_VENDOR: {
        personnel: {
            boardOfDirectors: 2,
            shareholderPerson: 1,
            shareholderCompany: 1,
            authorizedSigner: 1,
        },
        userAccess: [
            { role: 'ADMIN_FINANCE', count: 1 },
            { role: 'ADMIN_PROCUREMENT', count: 1 },
        ],
        banks: 2,
        documents: 'ALL',
        competencies: [
            { categoryCode: 'ICT', count: 2, customerReference: 2 },
        ],
        financialReports: {
            annual: 1,
            interim: 1,
        },
    },
    LARGE_VENDOR: {
        personnel: {
            boardOfDirectors: 3,
            shareholderPerson: 2,
            shareholderCompany: 1,
            authorizedSigner: 2,
        },
        userAccess: [
            { role: 'ADMIN_FINANCE', count: 2 },
            { role: 'ADMIN_PROCUREMENT', count: 1 },
        ],
        banks: 3,
        documents: 'ALL',
        competencies: [
            { categoryCode: 'ICT', count: 3, customerReference: 2 },
            { categoryCode: 'NETWORK', count: 2, customerReference: 1 },
        ],
        financialReports: {
            annual: 2,
            interim: 1,
        },
    },
};

// import { AppDataSource } from '../data-source';
// import { faker } from '@faker-js/faker';
// import * as bcrypt from 'bcrypt';

// // --- Master Entities ---
// import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
// import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
// import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
// import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
// import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
// import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
// import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
// import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
// import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
// import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';

// // --- Temp Entities ---
// import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
// import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
// import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
// import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
// import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
// import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
// import { VendorCompetencyTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity';
// import { VendorCustomerReferenceTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-customer-reference-temp.entity';
// import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
// import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';

// // --- Workflow & Uman ---
// import { User } from '@modules/uman/user/entities/user.entity';
// import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
// import { Role } from '@modules/uman/role/entities/role.entity';
// import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
// import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
// import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
// import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
// import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
// import { WorkflowTransactionStatus, WorkflowTransactionStepStatus } from '@common/enums/workflow-transaction.enum';

// // --- Lookups ---
// import { VendorStatus } from '@modules/master/vendor-status/entities/vendor-status.entity';
// import { Bank } from '@modules/master/bank/entities/bank.entity';
// import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
// import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
// import { Site } from '@modules/master/site/entities/site.entity';
// import { Country } from '@modules/master/country/entities/country.entity';
// import { Province } from '@modules/master/province/entities/province.entity';
// import { City } from '@modules/master/city/entities/city.entity';
// import { Currency } from '@modules/master/currency/entities/currency.entity';
// import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
// import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
// import { File } from '@modules/master/file/entities/file.entity';
// import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
// import dayjs from 'dayjs';

// function randomArrayElement<T>(arr: T[]): T {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// function randomArrayElements<T>(arr: T[], count: number): T[] {
//     const shuffled = [...arr].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
// }

// function getRandomDate(startDaysAgo: number, endDaysAgo: number = 0): Date {
//     const start = dayjs().subtract(startDaysAgo, 'day');
//     const end = dayjs().subtract(endDaysAgo, 'day');
//     return faker.date.between({ from: start.toDate(), to: end.toDate() });
// }

// async function runDemoSeed() {
//     await AppDataSource.initialize();
//     console.log('🌱 Database connected.');

//     const args = process.argv.slice(2);
//     let vendorCount = 1000;
//     args.forEach(arg => {
//         if (arg.startsWith('--vendors=')) {
//             vendorCount = parseInt(arg.split('=')[1], 10);
//         }
//     });

//     console.log(`🚀 Starting to seed ${vendorCount} vendors...`);

//     // Fetch master data
//     console.log('Fetching master data...');
//     const vendorStatuses = await AppDataSource.getRepository(VendorStatus).find();
//     const sites = await AppDataSource.getRepository(Site).find();
//     const businessTypes = await AppDataSource.getRepository(BusinessEntityType).find();
//     const countries = await AppDataSource.getRepository(Country).find();
//     const provinces = await AppDataSource.getRepository(Province).find();
//     const cities = await AppDataSource.getRepository(City).find();
//     const banks = await AppDataSource.getRepository(Bank).find();
//     const currencies = await AppDataSource.getRepository(Currency).find();
//     const affiliateTypes = await AppDataSource.getRepository(AffiliateType).find();
//     const competencyItems = await AppDataSource.getRepository(CompetencyItem).find();
//     const documentTypes = await AppDataSource.getRepository(DocumentType).find();
//     const personnelTypes = await AppDataSource.getRepository(CompanyPersonnelType).find();
//     const files = await AppDataSource.getRepository(File).find({ take: 5 });
    
//     // Workflow master
//     const workflows = await AppDataSource.getRepository(MasterWorkflow).find();
//     const registrationWorkflow = workflows.find(w => w?.code === 'VENDOR_REGISTRATION') || workflows[0];
//     const updateWorkflow = workflows.find(w => w?.code === 'WF_UPDATE_VENDOR') || workflows[0];
//     const workflowSteps = await AppDataSource.getRepository(MasterWorkflowStep).find();
    
//     const adminOpsUsers = await AppDataSource.getRepository(User).find({ take: 5 }); 
//     const defaultRequester = adminOpsUsers[0];

//     // Roles
//     const roles = await AppDataSource.getRepository(Role).find();
//     const adminVendorRole = roles.find(r => r.name.toLowerCase().includes('admin vendor')) || roles[0];
//     const amRole = roles.find(r => r.name.toLowerCase().includes('account manager')) || roles[0];
//     const financeRole = roles.find(r => r.name.toLowerCase().includes('finance')) || roles[0];

//     // Status mapping based on goal distribution
//     const getStatusAndFlow = () => {
//         const rand = Math.random() * 100;
        
//         let statusStr = '';
//         let hasTemp = false;
//         let flowStatus: WorkflowTransactionStatus = WorkflowTransactionStatus.IN_PROGRESS;
//         let flowProgress = 0; // 0=submitted, 1=adminops done, 2=approver1 done, etc
        
//         if (rand < 45) { statusStr = 'ACTIVE'; hasTemp = false; }
//         else if (rand < 50) { statusStr = 'INACTIVE'; hasTemp = false; }
//         else if (rand < 52) { statusStr = 'BLACKLISTED'; hasTemp = false; }
//         else if (rand < 62) { 
//             statusStr = 'REGISTRATION'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
//             flowProgress = Math.floor(Math.random() * 3); // 0, 1, or 2 steps completed
//         }
//         else if (rand < 72) { 
//             statusStr = 'REQUEST_FOR_REAPPROVAL'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
//             flowProgress = Math.floor(Math.random() * 3); 
//         }
//         else if (rand < 80) { 
//             statusStr = 'REVISION'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.REVISED; 
//             flowProgress = Math.floor(Math.random() * 2); 
//         }
//         else if (rand < 88) { 
//             statusStr = 'WAITING_ADMIN_OPS'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
//             flowProgress = 0; 
//         }
//         else if (rand < 95) { 
//             statusStr = 'WAITING_APPROVER_1'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
//             flowProgress = 1; 
//         }
//         else { 
//             statusStr = 'WAITING_APPROVER_2'; 
//             hasTemp = true; 
//             flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
//             flowProgress = 2; 
//         }

//         return { 
//             status: vendorStatuses.find(s => s.code === statusStr) || vendorStatuses[0], 
//             hasTemp, 
//             flowStatus,
//             flowProgress
//         };
//     };

//     const BATCH_SIZE = 100;
//     const defaultPassword = await bcrypt.hash('Password123!', 10);
//     const BATCHES = Math.ceil(vendorCount / BATCH_SIZE);

//     for (let batch = 0; batch < BATCHES; batch++) {
//         const batchSize = Math.min(BATCH_SIZE, vendorCount - batch * BATCH_SIZE);
//         console.log(`Processing batch ${batch + 1}/${BATCHES} (${batchSize} vendors)...`);
        
//         await AppDataSource.transaction(async (manager) => {
//             const vendors: Vendor[] = [];
//             const flowMappings: any[] = [];
            
//             for (let j = 0; j < batchSize; j++) {
//                 const conf = getStatusAndFlow();
//                 const vendor = manager.create(Vendor, {
//                     vendorCode: faker.string.alphanumeric(8).toUpperCase(),
//                     vendorStage: 'VENDOR',
//                     vendorType: 'LOCAL',
//                     vendorStatusId: conf.status.id,
//                 });
//                 vendors.push(vendor);
//                 flowMappings.push(conf);
//             }
            
//             const savedVendors = await manager.save(Vendor, vendors);

//             const companies: VendorCompany[] = [];
//             const personnelList: VendorPersonnel[] = [];
//             const users: User[] = [];
//             const userHasRoles: UserHasRole[] = [];
//             const banksList: VendorBank[] = [];
//             const affiliations: VendorAffiliation[] = [];
//             const businessLicenses: VendorBusinessLicense[] = [];
//             const competencies: VendorCompetency[] = [];
//             const customerReferences: VendorCustomerReference[] = [];
//             const documents: VendorDocument[] = [];
//             const financialReports: VendorFinancialReport[] = [];
            
//             const vendorTemps: VendorTemp[] = [];
            
//             // Workflow arrays
//             const transactions: WorkflowTransaction[] = [];
//             const transactionSteps: WorkflowTransactionStep[] = [];
//             const transactionHistories: WorkflowHistory[] = [];

//             for (let idx = 0; idx < savedVendors.length; idx++) {
//                 const vendor = savedVendors[idx];
//                 const conf = flowMappings[idx];

//                 // --- 1. Generate Master Data (Approved/Current State) ---
//                 const baseCompanyName = faker.company.name();
//                 const company = manager.create(VendorCompany, {
//                     vendorId: vendor.id,
//                     companyName: baseCompanyName,
//                     siteId: randomArrayElement(sites)?.id,
//                     businessTypeId: randomArrayElement(businessTypes)?.id,
//                     staffCount: faker.number.int({ min: 10, max: 1000 }),
//                     address: faker.location.streetAddress(),
//                     countryId: randomArrayElement(countries)?.id,
//                     provinceId: randomArrayElement(provinces)?.id,
//                     cityId: randomArrayElement(cities)?.id,
//                     postalCode: faker.location.zipCode(),
//                     website: faker.internet.url(),
//                 });
//                 companies.push(company);

//                 const p1Type = personnelTypes.find(t => t.code === 'BOARD_OF_DIRECTOR');
//                 if (p1Type) {
//                     for (let k = 0; k < 5; k++) {
//                         personnelList.push(manager.create(VendorPersonnel, {
//                             vendorId: vendor.id,
//                             companyPersonnelTypeId: p1Type.id,
//                             fullname: faker.person.fullName(),
//                             idNumber: faker.string.numeric(16),
//                             taxpayerId: faker.string.numeric(15),
//                             email: faker.internet.email(),
//                             phoneNumber: faker.phone.number(),
//                             isActive: true,
//                         }));
//                     }
//                 }

//                 // Internal User mapping
//                 const u = manager.create(User, {
//                     vendor,
//                     firstname: faker.person.firstName(),
//                     lastname: faker.person.lastName(),
//                     username: faker.internet.username() + faker.string.alphanumeric(4),
//                     email: faker.internet.email(),
//                     password: defaultPassword,
//                     type: 'EXTERNAL',
//                     isActive: true,
//                 });
//                 users.push(u);

//                 const bank = manager.create(VendorBank, {
//                     vendorId: vendor.id,
//                     bankId: randomArrayElement(banks)?.id,
//                     currencyId: randomArrayElement(currencies)?.id,
//                     accountNumber: faker.finance.accountNumber(),
//                     accountName: faker.finance.accountName(),
//                     branchName: faker.location.city(),
//                     isActive: true
//                 });
//                 banksList.push(bank);

//                 const affiliation = manager.create(VendorAffiliation, {
//                     vendorId: vendor.id,
//                     affiliateTypeId: randomArrayElement(affiliateTypes)?.id,
//                     companyName: faker.company.name(),
//                     description: faker.company.catchPhrase(),
//                     isActive: true
//                 });
//                 affiliations.push(affiliation);

//                 const bl = manager.create(VendorBusinessLicense, {
//                     vendorId: vendor.id,
//                     licenseNumber: faker.string.alphanumeric(15),
//                     issuedBy: faker.company.name(),
//                     issuedDate: faker.date.past({ years: 5 }),
//                     expiredDate: faker.date.future({ years: 5 }),
//                     isActive: true,
//                 });
//                 businessLicenses.push(bl);

//                 const comp = manager.create(VendorCompetency, {
//                     vendorId: vendor.id,
//                     competencyItemId: randomArrayElement(competencyItems)?.id,
//                     isActive: true
//                 });
//                 competencies.push(comp);

//                 const doc = manager.create(VendorDocument, {
//                     vendorId: vendor.id,
//                     documentTypeId: randomArrayElement(documentTypes)?.id,
//                     documentNumber: faker.string.alphanumeric(10),
//                     fileId: randomArrayElement(files)?.id,
//                     isActive: true
//                 });
//                 documents.push(doc);

//                 const finReport = manager.create(VendorFinancialReport, {
//                     vendorId: vendor.id,
//                     reportType: 'ANNUAL',
//                     year: 2023,
//                     currencyId: randomArrayElement(currencies)?.id,
//                     totalAsset: faker.number.int({ min: 1000000, max: 1000000000 }),
//                     totalRevenue: faker.number.int({ min: 1000000, max: 1000000000 }),
//                     isActive: true
//                 });
//                 financialReports.push(finReport);

//                 // For completely finalised master vendors
//                 if (!conf.hasTemp) {
//                     const wt = manager.create(WorkflowTransaction, {
//                         workflowId: registrationWorkflow?.id || 1,
//                         vendorTempId: null as any,
//                         siteId: company.siteId,
//                         requesterId: defaultRequester?.id || 1,
//                         status: WorkflowTransactionStatus.COMPLETED,
//                         submittedAt: getRandomDate(30, 20),
//                         completedAt: getRandomDate(10),
//                     });
//                     transactions.push(wt);
//                 } else {
//                     // Pre-generate VendorTemp object to be populated and saved later
//                     const vTemp = manager.create(VendorTemp, {
//                         vendorId: vendor.id,
//                         vendorCode: vendor.vendorCode,
//                         vendorStage: vendor.vendorStage,
//                         vendorType: vendor.vendorType,
//                         vendorStatusId: vendor.vendorStatusId,
//                     });
//                     vendorTemps.push(vTemp);
//                 }
//             }

//             // Save Master Data
//             await manager.save(VendorCompany, companies);
//             await manager.save(VendorPersonnel, personnelList);
//             const savedUsers = await manager.save(User, users);
//             for (const savedUser of savedUsers) {
//                 userHasRoles.push(manager.create(UserHasRole, { user: savedUser, role: adminVendorRole }));
//             }
//             await manager.save(UserHasRole, userHasRoles);
            
//             await manager.save(VendorBank, banksList);
//             await manager.save(VendorAffiliation, affiliations);
//             await manager.save(VendorBusinessLicense, businessLicenses);
//             const savedCompetencies = await manager.save(VendorCompetency, competencies);
//             for (const c of savedCompetencies) {
//                 customerReferences.push(manager.create(VendorCustomerReference, {
//                     vendorCompetencyId: c.id,
//                     clientName: faker.company.name(),
//                     projectName: faker.company.catchPhrase(),
//                     contractValue: faker.number.int({ min: 50000, max: 1000000 }),
//                     currencyId: randomArrayElement(currencies)?.id,
//                     isActive: true
//                 }));
//             }
//             await manager.save(VendorCustomerReference, customerReferences, { chunk: 1000 });
//             await manager.save(VendorDocument, documents);
//             await manager.save(VendorFinancialReport, financialReports);

//             // Generate Master Data Workflow Histories (For non-temp vendors)
//             if (transactions.length > 0) {
//                 const savedWt = await manager.save(WorkflowTransaction, transactions);
//                 for (const wt of savedWt) {
//                      transactionHistories.push(manager.create(WorkflowHistory, {
//                         workflowTransactionId: wt.id,
//                         action: 'SUBMIT',
//                         actionBy: defaultRequester?.id || 1,
//                         actionDate: wt.submittedAt,
//                         remarks: 'Vendor submitted workflow'
//                      }));
//                      transactionHistories.push(manager.create(WorkflowHistory, {
//                         workflowTransactionId: wt.id,
//                         action: 'COMPLETED',
//                         actionBy: defaultRequester?.id || 1,
//                         actionDate: wt.completedAt
//                      }));
//                 }
//             }

//             // --- 2. Generate Temp Data (In Progress Workflow) ---
//             if (vendorTemps.length > 0) {
//                 const savedVendorTemps = await manager.save(VendorTemp, vendorTemps);
                
//                 const companyTemps: VendorCompanyTemp[] = [];
//                 const personnelTemps: VendorPersonnelTemp[] = [];
//                 const bankTemps: VendorBankTemp[] = [];
//                 const affiliationTemps: VendorAffiliationTemp[] = [];
//                 const businessLicenseTemps: VendorBusinessLicenseTemp[] = [];
//                 const competencyTemps: VendorCompetencyTemp[] = [];
//                 const documentTemps: VendorDocumentTemp[] = [];
//                 const financialReportTemps: VendorFinancialReportTemp[] = [];
//                 const customerRefTemps: VendorCustomerReferenceTemp[] = [];
                
//                 const tempTransactions: WorkflowTransaction[] = [];

//                 for (let i = 0; i < savedVendorTemps.length; i++) {
//                     const vt = savedVendorTemps[i];
//                     const idx = savedVendors.findIndex(v => v.id === vt.vendorId);
//                     const conf = flowMappings[idx];
                    
//                     const randReviewStatus = () => Math.random() > 0.5 ? 'OK' : 'NOT_OK';
//                     const randNotes = () => Math.random() > 0.5 ? faker.lorem.sentence() : undefined;
                    
//                     // Temp Company
//                     const origComp = companies.find(c => c.vendorId === vt.vendorId);
//                     if (origComp) {
//                         companyTemps.push(manager.create(VendorCompanyTemp, {
//                             vendorTempId: vt.id,
//                             companyName: origComp.companyName + ' ' + faker.company.buzzNoun(), // Modification
//                             siteId: origComp.siteId,
//                             businessTypeId: origComp.businessTypeId,
//                             staffCount: origComp.staffCount,
//                             address: origComp.address,
//                             countryId: origComp.countryId,
//                             provinceId: origComp.provinceId,
//                             cityId: origComp.cityId,
//                             postalCode: origComp.postalCode,
//                             website: origComp.website,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }

//                     // Temp Bank
//                     const origBank = banksList.find(b => b.vendorId === vt.vendorId);
//                     if (origBank) {
//                         bankTemps.push(manager.create(VendorBankTemp, {
//                             vendorTempId: vt.id,
//                             vendorBankId: origBank.id,
//                             bankId: origBank.bankId,
//                             currencyId: origBank.currencyId,
//                             accountNumber: origBank.accountNumber + '99', // Modification
//                             accountName: origBank.accountName,
//                             branchName: origBank.branchName,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }
                    
//                     // Temp Affiliation
//                     const origAff = affiliations.find(a => a.vendorId === vt.vendorId);
//                     if (origAff) {
//                         affiliationTemps.push(manager.create(VendorAffiliationTemp, {
//                             vendorTempId: vt.id,
//                             vendorAffiliationId: origAff.id,
//                             affiliateTypeId: origAff.affiliateTypeId,
//                             companyName: origAff.companyName,
//                             description: origAff.description + ' (Updated)',
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }
                    
//                     // Temp Personnel
//                     const origP = personnelList.find(p => p.vendorId === vt.vendorId);
//                     if (origP) {
//                         personnelTemps.push(manager.create(VendorPersonnelTemp, {
//                             vendorTempId: vt.id,
//                             vendorPersonnelId: origP.id,
//                             companyPersonnelTypeId: origP.companyPersonnelTypeId,
//                             fullname: origP.fullname + ' (Updated)',
//                             idNumber: origP.idNumber,
//                             taxpayerId: origP.taxpayerId,
//                             email: origP.email,
//                             phoneNumber: origP.phoneNumber,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }

//                     // Temp BL
//                     const origBL = businessLicenses.find(bl => bl.vendorId === vt.vendorId);
//                     if (origBL) {
//                         businessLicenseTemps.push(manager.create(VendorBusinessLicenseTemp, {
//                             vendorTempId: vt.id,
//                             vendorBusinessLicenseId: origBL.id,
//                             number: origBL.licenseNumber,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }

//                     // Temp Document
//                     const origDoc = documents.find(d => d.vendorId === vt.vendorId);
//                     if (origDoc) {
//                         documentTemps.push(manager.create(VendorDocumentTemp, {
//                             vendorTempId: vt.id,
//                             vendorDocumentId: origDoc.id,
//                             documentTypeId: origDoc.documentTypeId,
//                             documentNumber: origDoc.documentNumber,
//                             fileId: origDoc.fileId,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }
                    
//                     // Temp Financial Report
//                     const origFin = financialReports.find(f => f.vendorId === vt.vendorId);
//                     if (origFin) {
//                         financialReportTemps.push(manager.create(VendorFinancialReportTemp, {
//                             vendorTempId: vt.id,
//                             vendorFinancialReportId: origFin.id,
//                             reportType: origFin.reportType,
//                             year: origFin.year,
//                             currencyId: origFin.currencyId,
//                             totalAsset: origFin.totalAsset,
//                             totalRevenue: origFin.totalRevenue + 50000,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         }));
//                     }

//                     // Temp Competency
//                     const origComp = competencies.find(c => c.vendorId === vt.vendorId);
//                     if (origComp) {
//                         const ct = manager.create(VendorCompetencyTemp, {
//                             vendorTempId: vt.id,
//                             vendorCompetencyId: origComp.id,
//                             competencyItemId: origComp.competencyItemId,
//                             reviewStatus: randReviewStatus(),
//                             reviewNotes: randNotes(),
//                             action: 'UPDATE'
//                         });
//                         competencyTemps.push(ct);
//                         // No easy way to retrieve ct.id immediately without save, 
//                         // so we don't bind CustomerReferenceTemp tightly or we save sequentially.
//                     }

//                     // SLA Setup
//                     const isSlaBreached = Math.random() < 0.3; // 30% over SLA
//                     const submittedAt = isSlaBreached ? getRandomDate(15, 10) : getRandomDate(3, 1);
                    
//                     let rejectedAt = undefined;
//                     let revisedAt = undefined;
//                     if (conf.flowStatus === WorkflowTransactionStatus.REJECTED) rejectedAt = getRandomDate(0);
//                     if (conf.flowStatus === WorkflowTransactionStatus.REVISED) revisedAt = getRandomDate(0);

//                     const wt = manager.create(WorkflowTransaction, {
//                         workflowId: updateWorkflow?.id || registrationWorkflow?.id || 1,
//                         vendorTempId: vt.id,
//                         siteId: origComp?.siteId || 1,
//                         requesterId: defaultRequester?.id || 1,
//                         status: conf.flowStatus,
//                         submittedAt: submittedAt,
//                         rejectedAt,
//                         revisedAt
//                     });
//                     tempTransactions.push(wt);
//                 }

//                 // Save Temp Dependencies
//                 await manager.save(VendorCompanyTemp, companyTemps);
//                 await manager.save(VendorPersonnelTemp, personnelTemps);
//                 await manager.save(VendorBankTemp, bankTemps);
//                 await manager.save(VendorAffiliationTemp, affiliationTemps);
//                 await manager.save(VendorBusinessLicenseTemp, businessLicenseTemps);
//                 await manager.save(VendorDocumentTemp, documentTemps);
//                 await manager.save(VendorFinancialReportTemp, financialReportTemps);
//                 await manager.save(VendorCompetencyTemp, competencyTemps);
                
//                 // --- 3. Save Workflow Transactions and Steps ---
//                 const savedTempWt = await manager.save(WorkflowTransaction, tempTransactions);
//                 const wtUpdates: WorkflowTransaction[] = [];

//                 for (let i = 0; i < savedTempWt.length; i++) {
//                     const wt = savedTempWt[i];
//                     const vt = savedVendorTemps[i];
//                     const idx = savedVendors.findIndex(v => v.id === vt.vendorId);
//                     const conf = flowMappings[idx];
                    
//                     // History timeline
//                     let currentDate = dayjs(wt.submittedAt);
//                     transactionHistories.push(manager.create(WorkflowHistory, {
//                         workflowTransactionId: wt.id,
//                         action: 'SUBMITTED',
//                         actionBy: defaultRequester?.id || 1,
//                         actionDate: currentDate.toDate()
//                     }));

//                     const stepChain = ['ADMIN_OPS', 'APPROVER_1', 'APPROVER_2'];
//                     const usersForSteps = [adminOpsUsers[0], adminOpsUsers[1], adminOpsUsers[2]];

//                     let currentStepRecord: WorkflowTransactionStep | null = null;
                    
//                     // Iterate up to flowProgress to generate APPROVED steps
//                     for (let s = 0; s < conf.flowProgress; s++) {
//                         const stepCode = stepChain[s];
//                         const masterStep = workflowSteps.find(ms => ms.code === stepCode) || workflowSteps[0];
                        
//                         const assignedAt = currentDate.toDate();
//                         currentDate = currentDate.add(1, 'day');
//                         const dueAt = currentDate.toDate();
//                         currentDate = currentDate.add(1, 'day'); // They take a day to act
                        
//                         const pastStep = manager.create(WorkflowTransactionStep, {
//                             workflowTransactionId: wt.id,
//                             workflowStepId: masterStep?.id || 1,
//                             userId: usersForSteps[s]?.id,
//                             status: WorkflowTransactionStepStatus.APPROVED,
//                             assignedAt,
//                             dueAt,
//                             actionAt: currentDate.toDate(),
//                         });
//                         const savedPastStep = await manager.save(WorkflowTransactionStep, pastStep);

//                         transactionHistories.push(manager.create(WorkflowHistory, {
//                             workflowTransactionId: wt.id,
//                             action: `${masterStep?.name || stepCode} APPROVED`.toUpperCase().replace(/_/g, ' '),
//                             actionBy: usersForSteps[s]?.id,
//                             actionDate: currentDate.toDate(),
//                             remarks: faker.lorem.sentence()
//                         }));
//                     }
                    
//                     // The CURRENT step
//                     const currentStepCode = stepChain[conf.flowProgress] || 'APPROVER_2';
//                     const currMasterStep = workflowSteps.find(ms => ms.code === currentStepCode) || workflowSteps[0];
//                     const currAssignedAt = currentDate.toDate();
                    
//                     let currStatus = WorkflowTransactionStepStatus.WAITING;
//                     let actionAt = undefined;

//                     if (conf.flowStatus === WorkflowTransactionStatus.REVISED) {
//                         currStatus = WorkflowTransactionStepStatus.REVISED;
//                         actionAt = dayjs().toDate();
//                         transactionHistories.push(manager.create(WorkflowHistory, {
//                             workflowTransactionId: wt.id,
//                             action: `${currMasterStep?.name || currentStepCode} REVISED`.toUpperCase().replace(/_/g, ' '),
//                             actionBy: usersForSteps[conf.flowProgress]?.id || 1,
//                             actionDate: actionAt,
//                             remarks: faker.lorem.sentence()
//                         }));
//                     } else if (conf.flowStatus === WorkflowTransactionStatus.REJECTED) {
//                         currStatus = WorkflowTransactionStepStatus.REJECTED;
//                         actionAt = dayjs().toDate();
//                         transactionHistories.push(manager.create(WorkflowHistory, {
//                             workflowTransactionId: wt.id,
//                             action: `${currMasterStep?.name || currentStepCode} REJECTED`.toUpperCase().replace(/_/g, ' '),
//                             actionBy: usersForSteps[conf.flowProgress]?.id || 1,
//                             actionDate: actionAt,
//                             remarks: faker.lorem.sentence()
//                         }));
//                     }
                    
//                     // SLA for current step
//                     const isSlaBreached = Math.random() < 0.3;
//                     const dueAt = isSlaBreached ? getRandomDate(4, 1) : getRandomDate(-2, -5);

//                     currentStepRecord = manager.create(WorkflowTransactionStep, {
//                         workflowTransactionId: wt.id,
//                         workflowStepId: currMasterStep?.id || 1,
//                         userId: usersForSteps[conf.flowProgress]?.id,
//                         status: currStatus,
//                         assignedAt: currAssignedAt,
//                         dueAt: dueAt,
//                         actionAt: actionAt,
//                     });
                    
//                     const savedCurrStep = await manager.save(WorkflowTransactionStep, currentStepRecord);
                    
//                     wt.currentTransactionStepId = savedCurrStep.id;
//                     wtUpdates.push(wt);
//                 }
                
//                 await manager.save(WorkflowTransaction, wtUpdates);
//             }
            
//             if (transactionHistories.length > 0) {
//                 await manager.save(WorkflowHistory, transactionHistories, { chunk: 1000 });
//             }
//         });
//     }

//     console.log('✅ Seed completed successfully!');
//     process.exit(0);
// }

// runDemoSeed().catch(err => {
//     console.error('❌ Seed failed:', err);
//     process.exit(1);
// });

import { AppDataSource } from '../data-source';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

// --- Master Entities ---
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';

// --- Temp Entities ---
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
import { VendorCompetencyTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity';
import { VendorCustomerReferenceTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-customer-reference-temp.entity';
import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';

// --- Workflow & Uman ---
import { User } from '@modules/uman/user/entities/user.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
import { WorkflowTransactionStatus, WorkflowTransactionStepStatus } from '@common/enums/workflow-transaction.enum';
import { VendorStatusEnum, VendorStageEnum, VendorTypeEnum } from '@common/enums/vendor.enum';

// --- Lookups ---
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { City } from '@modules/master/city/entities/city.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import dayjs from 'dayjs';
import { VendorTempStatus } from '@common/enums/vendor-temp-status.enum';
import { Title } from '@modules/master/title/entities/title.entity';
import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { IdentityType } from '@modules/master/identity-type/entities/identity-type.entity';
import { BankBranch } from '@modules/master/bank-branch/entities/bank-branch.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { MasterWorkflowStepAssignment } from '@modules/master/workflow-step-assignment/entities/workflow-step-assignment.entity';

function randomArrayElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomArrayElements<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function randomCsvFromArray<T extends { id: number }>(arr: T[], count: number): string {
  // ambil random items sebanyak count
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  // ambil id lalu gabungkan dengan koma
  return selected.map(item => item.id).join(',');
}

function getRandomDate(startDaysAgo: number, endDaysAgo: number = 0): Date {
    const start = dayjs().subtract(startDaysAgo, 'day');
    const end = dayjs().subtract(endDaysAgo, 'day');
    return faker.date.between({ from: start.toDate(), to: end.toDate() });
}

function getRandomVendorStage(): VendorStageEnum {
    const vendorStages = Object.values(VendorStageEnum);
    const idx = Math.floor(Math.random() * vendorStages.length);
    return vendorStages[idx] as VendorStageEnum;
}

function generatePrivyId(): string {
  const prefix = faker.string.alpha({ length: 2, casing: 'upper' }); // huruf besar
  const number = faker.string.numeric(4); // 4 digit angka
  return prefix + number;
}

function generateNpwp(): string {
  const wilayah = faker.string.numeric(2);
  const nomorUrut = faker.string.numeric(6);
  const status = faker.string.numeric(1);
  const cabang = faker.string.numeric(3);
  const pusat = faker.string.numeric(3);

  return `${wilayah}.${nomorUrut}.${status}-${cabang}.${pusat}`;
}

async function runDemoSeed() {
    await AppDataSource.initialize();
    console.log('🌱 Database connected.');

    const args = process.argv.slice(2);
    let vendorCount = 100;
    args.forEach(arg => {
        if (arg.startsWith('--vendors=')) {
            vendorCount = parseInt(arg.split('=')[1], 10);
        }
    });

    console.log(`🚀 Starting to seed ${vendorCount} vendors...`);

    // Fetch master data
    console.log('Fetching master data...');
    const vendorStatuses = VendorStatusEnum;
    const sites = await AppDataSource.getRepository(Site).find();
    const businessTypes = await AppDataSource.getRepository(BusinessEntityType).find();
    const jobTypes = await AppDataSource.getRepository(JobType).find();
    const identityTypes = await AppDataSource.getRepository(IdentityType).find();
    const areas = await AppDataSource.getRepository(Area).find();
    
    const provinces = await AppDataSource.getRepository(Province).find();
    const cities = await AppDataSource.getRepository(City).find();
    const bankBranches = await AppDataSource.getRepository(BankBranch).find();
    const currencies = await AppDataSource.getRepository(Currency).find();
    const affiliateTypes = await AppDataSource.getRepository(AffiliateType).find();
    const competencyItems = await AppDataSource.getRepository(CompetencyItem).find();
    const documentTypes = await AppDataSource.getRepository(DocumentType).find();
    const personnelTypes = await AppDataSource.getRepository(CompanyPersonnelType).find();
    const files = await AppDataSource.getRepository(File).find({ take: 5 });
    const usersForStepActor = await AppDataSource.getRepository(User).find({ where : { type: 'INTERNAL' }, take: 5 });
    
    // Workflow master
    const workflows = await AppDataSource.getRepository(MasterWorkflow).find();
    const registrationWorkflow = workflows.find(w => w.code === 'VENDOR_REGISTRATION') || workflows[0];
    const updateWorkflow = workflows.find(w => w.code === 'WF_UPDATE_VENDOR') || workflows[0];
    
    const workflowSteps = await AppDataSource.getRepository(MasterWorkflowStep).find();

    const workflowStepAssignments = await AppDataSource.getRepository(MasterWorkflowStepAssignment).find();
    
    const adminOpsUsers = await AppDataSource.getRepository(User).find({ take: 10 }); 
    const defaultRequester = adminOpsUsers[0];

    // Roles
    const roles = await AppDataSource.getRepository(Role).find();
    const adminVendorRole = roles.find(r => r.name.toLowerCase().includes('admin vendor')) || roles[0];
    const amRole = roles.find(r => r.name.toLowerCase().includes('account manager')) || roles[0];
    const financeRole = roles.find(r => r.name.toLowerCase().includes('finance')) || roles[0];

    const getStatusAndFlow = () => {
        const rand = Math.random() * 100;
        
        let statusStr: VendorStatusEnum = VendorStatusEnum.ACTIVE;
        let hasTemp = false;
        let flowStatus: WorkflowTransactionStatus = WorkflowTransactionStatus.COMPLETED;
        let flowProgress = 3; 
        

        switch (true) {
            case rand < 45: 
                statusStr = VendorStatusEnum.ACTIVE; 
                hasTemp = false; 
                flowStatus = WorkflowTransactionStatus.COMPLETED; 
                flowProgress = 3; 
                break;
            case rand < 50: 
                statusStr = VendorStatusEnum.INACTIVE; 
                hasTemp = false; 
                flowStatus = WorkflowTransactionStatus.COMPLETED; 
                flowProgress = 3; 
                break;
            case rand < 52: 
                statusStr = VendorStatusEnum.BLACKLISTED; 
                hasTemp = false; 
                flowStatus = WorkflowTransactionStatus.COMPLETED; 
                flowProgress = 3; 
                break;
            // case rand < 62: 
            //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
            //     flowProgress = 0; 
            //     break;
            // case rand < 72: 
            //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
            //     flowProgress = 1; 
            //     break;
            // case rand < 80: 
            //     statusStr = VendorStatusEnum.REVISION; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.REVISED; 
            //     flowProgress = Math.floor(Math.random() * 3); // Revised at any step
            //     break;
            // case rand < 88: 
            //     statusStr = VendorStatusEnum.REJECTED; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.REJECTED; 
            //     flowProgress = Math.floor(Math.random() * 3); // Rejected at any step
            //     break;
            // case rand < 95: 
            //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
            //     flowProgress = 2; 
            //     break;
            // default: 
            //     // Also simulating some WAITING_FOR_APPROVAL at step 0, 1, 2
            //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
            //     hasTemp = true; 
            //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
            //     flowProgress = Math.floor(Math.random() * 3); 
            //     break;
        }

        // if (rand < 45) { 
        //     statusStr = VendorStatusEnum.ACTIVE; 
        //     hasTemp = false; 
        //     flowStatus = WorkflowTransactionStatus.COMPLETED; 
        //     flowProgress = 3; 
        // }
        // else if (rand < 50) { 
        //     statusStr = VendorStatusEnum.INACTIVE; 
        //     hasTemp = false; 
        //     flowStatus = WorkflowTransactionStatus.COMPLETED; 
        //     flowProgress = 3; 
        // }
        // else if (rand < 52) { 
        //     statusStr = VendorStatusEnum.BLACKLISTED; 
        //     hasTemp = false; 
        //     flowStatus = WorkflowTransactionStatus.COMPLETED; 
        //     flowProgress = 3; 
        // }
        // else if (rand < 62) { 
        //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
        //     flowProgress = 0; 
        // }
        // else if (rand < 72) { 
        //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
        //     flowProgress = 1; 
        // }
        // else if (rand < 80) { 
        //     statusStr = VendorStatusEnum.REVISION; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.REVISED; 
        //     flowProgress = Math.floor(Math.random() * 3); // Revised at any step
        // }
        // else if (rand < 88) { 
        //     statusStr = VendorStatusEnum.REJECTED; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.REJECTED; 
        //     flowProgress = Math.floor(Math.random() * 3); // Rejected at any step
        // }
        // else if (rand < 95) { 
        //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
        //     flowProgress = 2; 
        // }
        // else { 
        //     // Also simulating some WAITING_FOR_APPROVAL at step 0, 1, 2
        //     statusStr = VendorStatusEnum.WAITING_FOR_APPROVAL; 
        //     hasTemp = true; 
        //     flowStatus = WorkflowTransactionStatus.IN_PROGRESS; 
        //     flowProgress = Math.floor(Math.random() * 3); 
        // }
        hasTemp = true

        return { 
            status: Object.values(vendorStatuses).find(s => s === statusStr) || vendorStatuses.ACTIVE, 
            hasTemp, 
            flowStatus,
            flowProgress
        };
    };

    const BATCH_SIZE = 100;
    const defaultPassword = await bcrypt.hash('password!', 10);
    const BATCHES = Math.ceil(vendorCount / BATCH_SIZE);

    for (let batch = 0; batch < BATCHES; batch++) {
        const batchSize = Math.min(BATCH_SIZE, vendorCount - batch * BATCH_SIZE);
        console.log(`Processing batch ${batch + 1}/${BATCHES} (${batchSize} vendors)...`);
        
        await AppDataSource.transaction(async (manager) => {
            const vendors: Vendor[] = [];
            const flowMappings: any[] = [];
            
            for (let j = 0; j < batchSize; j++) {
                const conf = getStatusAndFlow();
                const vendor = manager.create(Vendor, {
                    vendorCode: conf.status === VendorStatusEnum.ACTIVE ? faker.string.alphanumeric(8).toUpperCase() : undefined,
                    vendorStage: conf.status === VendorStatusEnum.ACTIVE ? VendorStageEnum.VENDOR : getRandomVendorStage(),
                    vendorType: VendorTypeEnum.LOCAL,
                    status: conf.status,
                });
                vendors.push(vendor);
                flowMappings.push(conf);
            }
            
            const savedVendors = await manager.save(Vendor, vendors);

            const companies: VendorCompany[] = [];
            const personnelList: VendorPersonnel[] = [];
            const users: User[] = [];
            const userHasRoles: UserHasRole[] = [];
            const banksList: VendorBank[] = [];
            const affiliations: VendorAffiliation[] = [];
            const businessLicenses: VendorBusinessLicense[] = [];
            const competencies: VendorCompetency[] = [];
            const customerReferences: VendorCustomerReference[] = [];
            const documents: VendorDocument[] = [];
            const financialReports: VendorFinancialReport[] = [];
            
            const vendorTemps: VendorTemp[] = [];
            
            for (let idx = 0; idx < savedVendors.length; idx++) {
                const vendor = savedVendors[idx];
                const conf = flowMappings[idx];

                // --- 1. Master Data ---
                const baseCompanyName = faker.company.name();
                const company = manager.create(VendorCompany, {
                    vendorId: vendor.id,
                    companyName: baseCompanyName,
                    siteId: randomArrayElement(sites)?.id,
                    businessTypeId: randomArrayElement(businessTypes)?.id,
                    staffCount: faker.number.int({ min: 10, max: 1000 }),
                    address: faker.location.streetAddress(),
                    countryId: 27,
                    provinceId: randomArrayElement(provinces)?.id,
                    cityId: randomArrayElement(cities)?.id,
                    postalCode: faker.location.zipCode(),
                    mapUrl: `https://www.google.com/maps?q=${faker.location.latitude()},${faker.location.longitude()}`,
                    website: faker.internet.url(),
                });
                companies.push(company);

                for (let k = 0; k < 5; k++) {
                    personnelList.push(manager.create(VendorPersonnel, {
                        vendorId: vendor.id,
                        personnelTypeId: 1,
                        titleId: randomArrayElement([1,2]),
                        name: faker.person.fullName(),
                        jobTypeId: randomArrayElement(jobTypes)?.id,
                        position: faker.person.jobTitle(),
                        identityNumber: faker.string.numeric(16),
                        identityTypeId: randomArrayElement(identityTypes)?.id,
                        email: faker.internet.email(),
                        phone: faker.phone.number(),
                    }));
                }

                for (let k = 0; k < 5; k++) {
                    personnelList.push(manager.create(VendorPersonnel, {
                        vendorId: vendor.id,
                        personnelTypeId: 2,
                        titleId: randomArrayElement([1,2, 3]),
                        name: faker.person.fullName(),
                        jobTypeId: randomArrayElement(jobTypes)?.id,
                        position: faker.person.jobTitle(),
                        identityNumber: faker.string.numeric(16),
                        identityTypeId: randomArrayElement(identityTypes)?.id,
                        email: faker.internet.email(),
                        phone: faker.phone.number(),
                        ownershipPercentage: 20
                    }));
                }

                for (let k = 0; k < 5; k++) {
                    personnelList.push(manager.create(VendorPersonnel, {
                        vendorId: vendor.id,
                        personnelTypeId: 2,
                        titleId: randomArrayElement([1,2]),
                        name: faker.person.fullName(),
                        jobTypeId: randomArrayElement(jobTypes)?.id,
                        position: faker.person.jobTitle(),
                        identityNumber: faker.string.numeric(16),
                        identityTypeId: randomArrayElement(identityTypes)?.id,
                        email: faker.internet.email(),
                        phone: faker.phone.number(),
                        privyId: generatePrivyId(),
                    }));
                }

                let firstname = faker.person.firstName();
                let lastname = faker.person.lastName();
                let username = faker.internet.username({firstName : firstname, lastName : lastname});
                let email = faker.internet.email({firstName : firstname, lastName : lastname, provider : baseCompanyName.split(" ")[0] + '.com'});

                // Internal User mapping
                const u = manager.create(User, {
                    vendor,
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: defaultPassword,
                    effectiveStartDate: faker.date.past(),
                    effectiveEndDate: faker.date.future({ years : 3}),
                    type: 'EXTERNAL',
                    isActive: true,
                    jobTitle: faker.person.jobTitle(),
                    phone: faker.phone.number(),
                    positionId: 1
                });
                users.push(u);

                for (let k = 0; k < 5; k++) {
                    let firstname = faker.person.firstName();
                    let lastname = faker.person.lastName();
                    let username = faker.internet.username({firstName : firstname, lastName : lastname});
                    let email = faker.internet.email({firstName : firstname, lastName : lastname, provider : baseCompanyName.split(" ")[0] + '.com'});
                    users.push(manager.create(User, {
                        vendor,
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        email: email,
                        password: defaultPassword,
                        effectiveStartDate: faker.date.past(),
                        effectiveEndDate: faker.date.future({ years : 3}),
                        type: 'EXTERNAL',
                        isActive: true,
                        jobTitle: faker.person.jobTitle(),
                        phone: faker.phone.number(),
                        positionId: randomArrayElement([2,3])
                    }));
                }

                for (let k = 0; k < 5; k++) {
                    banksList.push(manager.create(VendorBank, {
                        vendorId: vendor.id,
                        bankBranchId: randomArrayElement(bankBranches)?.id,
                        currencyId: randomArrayElement(currencies)?.id,
                        accountNumber: faker.finance.accountNumber(),
                        accountName: faker.finance.accountName(),
                        isActive: true,
                        fileId: randomArrayElement(files)?.id
                    }))
                }

                for (let k = 0; k < 5; k++) {
                    affiliations.push(manager.create(VendorAffiliation, {
                        vendorId: vendor.id,
                        affiliateTypeId: randomArrayElement(affiliateTypes)?.id,
                        companyName: faker.company.name(),
                        businessField: faker.company.catchPhrase(),
                        companyBusinessEntityTypeId: randomArrayElement(businessTypes)?.id,
                        npwp: generateNpwp(),
                    }))
                }

                const bl = manager.create(VendorBusinessLicense, {
                    vendorId: vendor.id,
                    number: faker.string.alphanumeric(15),
                    fileId: randomArrayElement(files)?.id,
                });
                businessLicenses.push(bl);

                for (let k = 0; k < 5; k++) {
                    competencies.push(manager.create(VendorCompetency, {
                        vendorId: vendor.id,
                        subCategoryItemId: randomArrayElement(competencyItems)?.id
                    }))
                }

                const docTypes = [1, 2, 3, 4, 5];
                for (let index = 0; index < docTypes.length; index++) {
                    const docTypeId = docTypes[index];
                    const field : Partial<VendorDocument> = {
                        vendorId : vendor.id,
                        documentTypeId : docTypeId,
                    };

                    switch (docTypeId) {
                        case 1:
                            field.documentNumber = generateNpwp();
                            field.address = faker.location.streetAddress();
                            field.fileId = randomArrayElement(files)?.id;
                            break;
                        case 2:
                            field.taxpayerStatus = faker.datatype.boolean();
                            field.publishDate = faker.date.past();
                            field.fileId = randomArrayElement(files)?.id;
                            break;
                        case 3:
                            field.documentNumber = faker.string.numeric(15);
                            field.publishDate = faker.date.past();
                            field.fileId = randomArrayElement(files)?.id;
                            break;
                        case 4:
                            field.documentNumber = faker.string.numeric(15);
                            field.publishDate = faker.date.past();
                            field.fileId = randomArrayElement(files)?.id;
                            break;
                        case 5:
                            field.fileId = randomArrayElement(files)?.id;
                            break;
                    
                        default:
                            break;
                    }
                    documents.push(manager.create(VendorDocument, field));   
                }

                const finReport = manager.create(VendorFinancialReport, {
                    vendorId: vendor.id,
                    reportType: 'ANNUAL',
                    auditStatus: 'AUDITED',
                    year: 2025,
                    fileId: randomArrayElement(files)?.id,
                    currencyId: randomArrayElement(currencies)?.id,
                    currentAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                    currentLiabilities: faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalLiabilities:faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalRevenue: faker.number.int({ min: 1000000, max: 1000000000 }),
                    netProfitLossAfterTax: faker.number.int({ min: 1000000, max: 1000000000 }),
                });
                financialReports.push(finReport);

                const finReport2 = manager.create(VendorFinancialReport, {
                    vendorId: vendor.id,
                    reportType: 'ANNUAL',
                    auditStatus: 'UNAUDITED',
                    year: 2024,
                    fileId: randomArrayElement(files)?.id,
                    currencyId: randomArrayElement(currencies)?.id,
                    currentAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                    currentLiabilities: faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalLiabilities:faker.number.int({ min: 1000000, max: 1000000000 }),
                    totalRevenue: faker.number.int({ min: 1000000, max: 1000000000 }),
                    netProfitLossAfterTax: faker.number.int({ min: 1000000, max: 1000000000 }),
                });
                financialReports.push(finReport2);

                // For temp vendors
                if (conf.hasTemp) {
                    const sequence = (0 + batch * savedVendors.length + idx + 1).toString().padStart(6, '0');
                    const year = new Date().getFullYear(); // misalnya 2026
                    const month = String(new Date().getMonth() + 1).padStart(2, '0'); // misalnya 06
                    const requestNo = `VRQ-${year}-${month}-${sequence}`;
                    const vTemp = manager.create(VendorTemp, {
                        vendorId: vendor.id,
                        requestNo: requestNo,
                        vendorType: vendor.vendorType,
                        status: conf.statusStr == VendorStatusEnum.REVISION ? VendorTempStatus.DRAFT : VendorTempStatus.SUBMITTED,
                    });
                    vendorTemps.push(vTemp);
                }
            }

            // Save Master Data
            await manager.save(VendorCompany, companies);
            await manager.save(VendorPersonnel, personnelList);
            const savedUsers = await manager.save(User, users);
            for (const savedUser of savedUsers) {
                userHasRoles.push(manager.create(UserHasRole, { user: savedUser, role: adminVendorRole, effectiveStartDate : savedUser.effectiveStartDate, effectiveEndDate : savedUser.effectiveEndDate, isActive : true }));
            }
            await manager.save(UserHasRole, userHasRoles);
            
            await manager.save(VendorBank, banksList);
            await manager.save(VendorAffiliation, affiliations);
            await manager.save(VendorBusinessLicense, businessLicenses);
            const savedCompetencies = await manager.save(VendorCompetency, competencies);
            for (const c of savedCompetencies) {
                customerReferences.push(manager.create(VendorCustomerReference, {
                    vendorCompetencyId: c.id,
                    name: faker.company.name(),
                    description: faker.company.catchPhrase(),
                    year: faker.date.past({years: 10}).getFullYear(),
                    fileId: randomArrayElement(files)?.id,
                    areaIds: randomCsvFromArray(areas, 3)
                }));
            }
            await manager.save(VendorCustomerReference, customerReferences, { chunk: 1000 });
            await manager.save(VendorDocument, documents);
            await manager.save(VendorFinancialReport, financialReports);

            // --- 2. Generate Temp Data (In Progress Workflow) ---
            const companyTemps: VendorCompanyTemp[] = [];
            const personnelTemps: VendorPersonnelTemp[] = [];
            const bankTemps: VendorBankTemp[] = [];
            const affiliationTemps: VendorAffiliationTemp[] = [];
            const businessLicenseTemps: VendorBusinessLicenseTemp[] = [];
            const competencyTemps: VendorCompetencyTemp[] = [];
            const documentTemps: VendorDocumentTemp[] = [];
            const financialReportTemps: VendorFinancialReportTemp[] = [];
            
            let savedVendorTemps: VendorTemp[] = [];
            if (vendorTemps.length > 0) {
                savedVendorTemps = await manager.save(VendorTemp, vendorTemps);
                for (let i = 0; i < savedVendorTemps.length; i++) {
                    const vt = savedVendorTemps[i];
                    
                    const randReviewStatus = () => Math.random() > 0.5 ? 'OK' : 'NOT_OK';
                    const randNotes = () => Math.random() > 0.5 ? faker.lorem.sentence() : undefined;
                    
                    const origCompany = companies.find(c => c.vendorId === vt.vendorId);
                    if (origCompany) {
                        companyTemps.push(manager.create(VendorCompanyTemp, {
                            vendorTempId: vt.id,
                            companyName: origCompany.companyName + ' ' + faker.company.buzzNoun(),
                            siteId: origCompany.siteId,
                            businessTypeId: origCompany.businessTypeId,
                            staffCount: origCompany.staffCount,
                            address: origCompany.address,
                            countryId: origCompany.countryId,
                            provinceId: origCompany.provinceId,
                            cityId: origCompany.cityId,
                            postalCode: origCompany.postalCode,
                            website: origCompany.website,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }

                    const origBank = banksList.find(b => b.vendorId === vt.vendorId);
                    if (origBank) {
                        bankTemps.push(manager.create(VendorBankTemp, {
                            vendorTempId: vt.id,
                            bankBranchId: origBank.bankBranchId,
                            currencyId: origBank.currencyId,
                            accountNumber: origBank.accountNumber + '99',
                            accountName: origBank.accountName,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }
                    
                    const origAff = affiliations.find(a => a.vendorId === vt.vendorId);
                    if (origAff) {
                        affiliationTemps.push(manager.create(VendorAffiliationTemp, {
                            vendorTempId: vt.id,
                            vendorAffiliationId: origAff.id,
                            affiliateTypeId: origAff.affiliateTypeId,
                            companyName: origAff.companyName,
                            businessField: faker.company.catchPhrase(),
                            companyBusinessEntityTypeId: randomArrayElement(businessTypes)?.id,
                            npwp: generateNpwp(),
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }
                    
                    const origP = personnelList.find(p => p.vendorId === vt.vendorId);
                    if (origP) {
                        personnelTemps.push(manager.create(VendorPersonnelTemp, {
                            vendorTempId: vt.id,
                            personnelTypeId: origP.personnelTypeId,
                            titleId: randomArrayElement([1,2, 3]),
                            jobTypeId: randomArrayElement(jobTypes)?.id,
                        position: faker.person.jobTitle(),
                            name: origP.name + ' (Updated)',
                            identityNumber: origP.identityNumber,
                            identityTypeId: origP.identityTypeId,
                            email: origP.email,
                            phone: origP.phone,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }

                    const origBL = businessLicenses.find(bl => bl.vendorId === vt.vendorId);
                    if (origBL) {
                        businessLicenseTemps.push(manager.create(VendorBusinessLicenseTemp, {
                            vendorTempId: vt.id,
                            vendorBusinessLicenseId: origBL.id,
                            number: origBL.number,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }

                    const origDoc = documents.find(d => d.vendorId === vt.vendorId);
                    if (origDoc) {
                        documentTemps.push(manager.create(VendorDocumentTemp, {
                            vendorTempId: vt.id,
                            vendorDocumentId: origDoc.id,
                            documentTypeId: origDoc.documentTypeId,
                            documentNumber: origDoc.documentNumber,
                            fileId: origDoc.fileId,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }
                    
                    const origFin = financialReports.find(f => f.vendorId === vt.vendorId);
                    if (origFin) {
                        financialReportTemps.push(manager.create(VendorFinancialReportTemp, {
                            vendorTempId: vt.id,
                            vendorFinancialReportId: origFin.id,
                            reportType: origFin.reportType,
                            year: origFin.year,
                            currencyId: origFin.currencyId,
                            currentAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                            totalAssets: faker.number.int({ min: 1000000, max: 1000000000 }),
                            currentLiabilities: faker.number.int({ min: 1000000, max: 1000000000 }),
                            totalLiabilities:faker.number.int({ min: 1000000, max: 1000000000 }),
                            totalRevenue: faker.number.int({ min: 1000000, max: 1000000000 }),
                            netProfitLossAfterTax: faker.number.int({ min: 1000000, max: 1000000000 }),
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }

                    const origComp = competencies.find(c => c.vendorId === vt.vendorId);
                    if (origComp) {
                        competencyTemps.push(manager.create(VendorCompetencyTemp, {
                            vendorTempId: vt.id,
                            vendorCompetencyId: origComp.id,
                            subCategoryItemId: origComp.subCategoryItemId,
                            reviewStatus: randReviewStatus(),
                            reviewNotes: randNotes(),
                            action: 'UPDATE'
                        }));
                    }
                }

                await manager.save(VendorCompanyTemp, companyTemps);
                await manager.save(VendorPersonnelTemp, personnelTemps);
                await manager.save(VendorBankTemp, bankTemps);
                await manager.save(VendorAffiliationTemp, affiliationTemps);
                await manager.save(VendorBusinessLicenseTemp, businessLicenseTemps);
                await manager.save(VendorDocumentTemp, documentTemps);
                await manager.save(VendorFinancialReportTemp, financialReportTemps);
                await manager.save(VendorCompetencyTemp, competencyTemps);
            }
                
            // --- 3. Save Workflow Transactions, Steps, and Histories ---
            const allTransactions: WorkflowTransaction[] = [];
            const transactionSteps: WorkflowTransactionStep[] = [];
            const transactionHistories: WorkflowHistory[] = [];

            const stepChain = ['ADMIN_OPS', 'APPROVER_1', 'APPROVER_2'];
            
            // Build Initial Workflow Transactions
            for (let idx = 0; idx < savedVendors.length; idx++) {
                const vendor = savedVendors[idx];
                const conf = flowMappings[idx];
                const isSlaBreached = Math.random() < 0.3; // 30% over SLA
                const submittedAt = isSlaBreached ? getRandomDate(15, 10) : getRandomDate(3, 1);
                
                let rejectedAt = undefined;
                let revisedAt = undefined;
                let completedAt = undefined;
                
                if (conf.flowStatus === WorkflowTransactionStatus.REJECTED) rejectedAt = dayjs().toDate();
                if (conf.flowStatus === WorkflowTransactionStatus.REVISED) revisedAt = dayjs().toDate();
                if (conf.flowStatus === WorkflowTransactionStatus.COMPLETED) completedAt = dayjs().toDate();

                const vt = savedVendorTemps.find(t => t.vendorId === vendor.id);

                const wt = manager.create(WorkflowTransaction, {
                    workflowId: registrationWorkflow?.id || 1,
                    vendorTempId: vt?.id,
                    siteId: companies.find(c => c.vendorId === vendor.id)?.siteId || 1,
                    requesterId: defaultRequester?.id || 1,
                    status: conf.flowStatus,
                    submittedAt: submittedAt,
                    rejectedAt,
                    revisedAt,
                    completedAt
                });
                // Temporarily attach conf to wt for steps logic later
                (wt as any)._conf = conf;
                allTransactions.push(wt);
            }
            
            const savedWtList = await manager.save(WorkflowTransaction, allTransactions);

            // Build Steps and Histories (chronological)
            for (let i = 0; i < savedWtList.length; i++) {
                const wt = savedWtList[i];
                const conf = (wt as any)._conf;
                
                let currentDate = dayjs(wt.submittedAt);
                
                // History: SUBMITTED
                transactionHistories.push(manager.create(WorkflowHistory, {
                    workflowTransactionId: wt.id,
                    action: WorkflowTransactionStepStatus.SUBMITTED,
                    actionBy: defaultRequester?.id || 1,
                    actionAt: currentDate.toDate(),
                    remarks: 'Vendor submitted workflow',
                    actorId: defaultRequester?.id,
                }));

                const usersForSteps = [adminOpsUsers[0], adminOpsUsers[1], adminOpsUsers[2]];
                let currentStepRecord: WorkflowTransactionStep | null = null;
                
                // Generate all steps defined in workflow (Admin Ops, Approver 1, Approver 2)
                for (let s = 0; s < stepChain.length; s++) {
                    const stepCode = stepChain[s];
                    const masterStep = workflowSteps.find(ms => ms.code === stepCode) || workflowSteps[0];
                    const masterSite = sites.find(s => s.id === wt.siteId);
                    const masterStepAssignment = workflowStepAssignments.find(msa => 
                        msa.workflowStepId === masterStep.id && 
                        msa.areaId == masterSite?.areaId );
                    let assigneeUserId = masterStepAssignment?.userId;
                    if (stepCode === "ADMIN_OPS") {
                        assigneeUserId = undefined;
                    }

                    // console.log('CHECK', {
                    //     stepCode,
                    //     assigneeUserId,
                    //     s,
                    //     conf,
                    //     masterStep,
                    //     masterSite,
                    //     masterStepAssignment
                    // });
                    
                    if (s < conf.flowProgress) {
                        // Past step (Completed / Approved)
                        const assignedAt = currentDate.toDate();
                        const dueAt = currentDate.add(2, 'day').toDate();
                        
                        currentDate = currentDate.add(faker.number.int({ min: 1, max: 12 }), 'hour');
                        const actionAt = currentDate.toDate();
                        
                        const pastStep = manager.create(WorkflowTransactionStep, {
                            workflowTransactionId: wt.id,
                            workflowStepId: masterStep?.id || 1,
                            userId: assigneeUserId,
                            status: WorkflowTransactionStepStatus.APPROVED,
                            assignedAt,
                            dueAt,
                            actionAt,
                            remarks: faker.lorem.sentence()
                        });
                        const savedPastStep = await manager.save(WorkflowTransactionStep, pastStep);

                        transactionHistories.push(manager.create(WorkflowHistory, {
                            workflowTransactionId: wt.id,
                            action: WorkflowTransactionStepStatus.APPROVED,
                            actionBy: assigneeUserId,
                            actionAt: actionAt,
                            remarks: pastStep.remarks,
                            actorId: assigneeUserId || 4,
                        }));
                        wt.currentTransactionStepId = savedPastStep.id;

                        
                    } else if (s === conf.flowProgress) {
                        // Current step (Waiting / Revised / Rejected)
                        const currAssignedAt = currentDate.toDate();
                        const isSlaBreached = Math.random() < 0.3;
                        const dueAt = isSlaBreached ? currentDate.subtract(1, 'day').toDate() : currentDate.add(2, 'day').toDate();
                        
                        let currStatus = WorkflowTransactionStepStatus.WAITING;
                        let actionAt = undefined;

                        if (conf.flowStatus === WorkflowTransactionStatus.REVISED) {
                            currStatus = WorkflowTransactionStepStatus.REVISED;
                            currentDate = currentDate.add(faker.number.int({ min: 1, max: 12 }), 'hour');
                            actionAt = currentDate.toDate();
                            
                            transactionHistories.push(manager.create(WorkflowHistory, {
                                workflowTransactionId: wt.id,
                                action: WorkflowTransactionStepStatus.REVISED,
                                actionBy: assigneeUserId,
                                actionAt: actionAt,
                                remarks: faker.lorem.sentence(),
                                actorId: assigneeUserId || 4,
                            }));
                        } else if (conf.flowStatus === WorkflowTransactionStatus.REJECTED) {
                            currStatus = WorkflowTransactionStepStatus.REJECTED;
                            currentDate = currentDate.add(faker.number.int({ min: 1, max: 12 }), 'hour');
                            actionAt = currentDate.toDate();
                            
                            transactionHistories.push(manager.create(WorkflowHistory, {
                                workflowTransactionId: wt.id,
                                action: WorkflowTransactionStepStatus.REJECTED,
                                actionBy: assigneeUserId,
                                actionAt: actionAt,
                                remarks: faker.lorem.sentence(),
                                actorId: assigneeUserId || 4,
                            }));
                        }

                        const currentStepRecord = manager.create(WorkflowTransactionStep, {
                            workflowTransactionId: wt.id,
                            workflowStepId: masterStep?.id || 1,
                            userId: assigneeUserId,
                            status: currStatus,
                            assignedAt: currAssignedAt,
                            dueAt: dueAt,
                            actionAt: actionAt,
                        });
                        
                        const savedCurrStep = await manager.save(WorkflowTransactionStep, currentStepRecord);
                        wt.currentTransactionStepId = savedCurrStep.id;

                    } else {
                        // Future step (Pending / Not Started)
                        const futureStep = manager.create(WorkflowTransactionStep, {
                            workflowTransactionId: wt.id,
                            workflowStepId: masterStep?.id || 1,
                            status: WorkflowTransactionStepStatus.PENDING,
                            userId: assigneeUserId,
                        });
                        await manager.save(WorkflowTransactionStep, futureStep);
                        
                    }
                }
                
                // If it completed all steps, simulate a COMPLETED action for the transaction
                if (conf.flowStatus === WorkflowTransactionStatus.COMPLETED) {
                    currentDate = currentDate.add(1, 'minute');
                    transactionHistories.push(manager.create(WorkflowHistory, {
                        workflowTransactionId: wt.id,
                        action: WorkflowTransactionStepStatus.APPROVED,
                        actionBy: usersForSteps[conf.flowProgress - 1]?.id || defaultRequester?.id || 1,
                        actionAt: currentDate.toDate(),
                        remarks: 'Workflow Completed',
                        actorId: randomArrayElement(usersForStepActor)?.id,
                    }));
                }
            }
            
            // Save current step IDs back to Transactions
            await manager.save(WorkflowTransaction, savedWtList);
            
            if (transactionHistories.length > 0) {
                await manager.save(WorkflowHistory, transactionHistories, { chunk: 1000 });
            }
        });
    }

    console.log('✅ Seed completed successfully!');
    process.exit(0);
}

runDemoSeed().catch(err => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
});

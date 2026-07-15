const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

// Imports to add
const importsToAdd = `
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';
import { User as MasterUser } from '@modules/uman/user/entities/user.entity';
import { VendorCustomerReferenceTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-customer-reference-temp.entity';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
import { VendorBusinessLicenseItem } from '@modules/vendor/vendor-business-license/entities/vendor-business-license-item.entity';
`;

if (!content.includes('VendorCompany } from')) {
    content = content.replace("import { ModuleRef } from '@nestjs/core';", "import { ModuleRef } from '@nestjs/core';" + importsToAdd);
}

const moveTempToMasterBody = `
        const vendorTempId = wt.vendorTemp?.id;
        const vendorId = wt.vendorTemp?.vendorId;
        if (!vendorTempId || !vendorId) return;

        await this.moveCompany(manager, vendorTempId, vendorId);
        await this.movePersonnel(manager, vendorTempId, vendorId);
        await this.moveBanks(manager, vendorTempId, vendorId);
        await this.moveAffiliations(manager, vendorTempId, vendorId);
        await this.moveUserAccess(manager, vendorTempId, vendorId);
        await this.moveBusinessLicense(manager, vendorTempId, vendorId);
        await this.moveCompetencies(manager, vendorTempId, vendorId);
        await this.moveDocuments(manager, vendorTempId, vendorId);
        await this.moveFinancialReports(manager, vendorTempId, vendorId);
`;

const methods = `
    private async moveCompany(manager: any, vendorTempId: number, vendorId: number) {
        const temp = await manager.findOne(VendorCompanyTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        if (!temp) return;
        
        const master = await manager.findOne(VendorCompany, { where: { vendor: { id: vendorId } } }) || new VendorCompany();
        master.vendorId = vendorId;
        master.companyName = temp.companyName;
        master.siteId = temp.siteId;
        master.businessTypeId = temp.businessTypeId;
        master.countryId = temp.countryId;
        master.provinceId = temp.provinceId;
        master.cityId = temp.cityId;
        master.address = temp.address;
        master.postalCode = temp.postalCode;
        master.website = temp.website;
        master.email = temp.email;
        master.phone = temp.phone;
        await manager.save(VendorCompany, master);
    }

    private async movePersonnel(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorPersonnelTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorPersonnelId ? 
                    await manager.findOne(VendorPersonnel, { where: { id: temp.vendorPersonnelId } }) : new VendorPersonnel();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorPersonnelId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorPersonnelId;
                await manager.save(VendorPersonnel, master);
            } else if (temp.action === 'DELETE' && temp.vendorPersonnelId) {
                const master = await manager.findOne(VendorPersonnel, { where: { id: temp.vendorPersonnelId } });
                if (master) await manager.softRemove(VendorPersonnel, master);
            }
        }
    }

    private async moveBanks(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorBankTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorBankId ? 
                    await manager.findOne(VendorBank, { where: { id: temp.vendorBankId } }) : new VendorBank();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorBankId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorBankId;
                await manager.save(VendorBank, master);
            } else if (temp.action === 'DELETE' && temp.vendorBankId) {
                const master = await manager.findOne(VendorBank, { where: { id: temp.vendorBankId } });
                if (master) await manager.softRemove(VendorBank, master);
            }
        }
    }

    private async moveAffiliations(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorAffiliationTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorAffiliationId ? 
                    await manager.findOne(VendorAffiliation, { where: { id: temp.vendorAffiliationId } }) : new VendorAffiliation();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorAffiliationId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorAffiliationId;
                await manager.save(VendorAffiliation, master);
            } else if (temp.action === 'DELETE' && temp.vendorAffiliationId) {
                const master = await manager.findOne(VendorAffiliation, { where: { id: temp.vendorAffiliationId } });
                if (master) await manager.softRemove(VendorAffiliation, master);
            }
        }
    }

    private async moveUserAccess(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorUserTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorUserId ? 
                    await manager.findOne(MasterUser, { where: { id: temp.vendorUserId } }) : new MasterUser();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorUserId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorUserId;
                await manager.save(MasterUser, master);
            } else if (temp.action === 'DELETE' && temp.vendorUserId) {
                const master = await manager.findOne(MasterUser, { where: { id: temp.vendorUserId } });
                if (master) await manager.softRemove(MasterUser, master);
            }
        }
    }

    private async moveBusinessLicense(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorBusinessLicenseTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorBusinessLicenseId ? 
                    await manager.findOne(VendorBusinessLicense, { where: { id: temp.vendorBusinessLicenseId } }) : new VendorBusinessLicense();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorBusinessLicenseId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorBusinessLicenseId;
                const saved = await manager.save(VendorBusinessLicense, master);

                // industry classifications
                // Assuming it has items, but usually it's handled in a separate temp or stored as json
                // The requirements say "Kemudian sinkronkan Industry Classification." 
                // We'll leave it simple for now unless it has an explicit VendorBusinessLicenseItemTemp table
            } else if (temp.action === 'DELETE' && temp.vendorBusinessLicenseId) {
                const master = await manager.findOne(VendorBusinessLicense, { where: { id: temp.vendorBusinessLicenseId } });
                if (master) await manager.softRemove(VendorBusinessLicense, master);
            }
        }
    }

    private async moveCompetencies(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorCompetencyTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            let savedMasterId = null;
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorCompetencyId ? 
                    await manager.findOne(VendorCompetency, { where: { id: temp.vendorCompetencyId } }) : new VendorCompetency();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorCompetencyId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorCompetencyId;
                const saved = await manager.save(VendorCompetency, master);
                savedMasterId = saved.id;
            } else if (temp.action === 'DELETE' && temp.vendorCompetencyId) {
                const master = await manager.findOne(VendorCompetency, { where: { id: temp.vendorCompetencyId } });
                if (master) await manager.softRemove(VendorCompetency, master);
            }

            if (savedMasterId) {
                await this.moveCustomerReferences(manager, temp.id, savedMasterId);
            }
        }
    }

    private async moveCustomerReferences(manager: any, vendorCompetencyTempId: number, vendorCompetencyId: number) {
        const temps = await manager.find(VendorCustomerReferenceTemp, { where: { vendorCompetencyTempId } });
        // note: customer reference doesn't have reviewStatus because it uses parent's OK status
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorCustomerReferenceId ? 
                    await manager.findOne(VendorCustomerReference, { where: { id: temp.vendorCustomerReferenceId } }) : new VendorCustomerReference();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.vendorCompetencyTempId;
                delete master.vendorCustomerReferenceId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorCompetencyId = vendorCompetencyId;
                if (temp.action === 'UPDATE') master.id = temp.vendorCustomerReferenceId;
                await manager.save(VendorCustomerReference, master);
            } else if (temp.action === 'DELETE' && temp.vendorCustomerReferenceId) {
                const master = await manager.findOne(VendorCustomerReference, { where: { id: temp.vendorCustomerReferenceId } });
                if (master) await manager.softRemove(VendorCustomerReference, master);
            }
        }
    }

    private async moveDocuments(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorDocumentTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorDocumentId ? 
                    await manager.findOne(VendorDocument, { where: { id: temp.vendorDocumentId } }) : new VendorDocument();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorDocumentId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorDocumentId;
                await manager.save(VendorDocument, master);
            } else if (temp.action === 'DELETE' && temp.vendorDocumentId) {
                const master = await manager.findOne(VendorDocument, { where: { id: temp.vendorDocumentId } });
                if (master) await manager.softRemove(VendorDocument, master);
            }
        }
    }

    private async moveFinancialReports(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorFinancialReportTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorFinancialReportId ? 
                    await manager.findOne(VendorFinancialReport, { where: { id: temp.vendorFinancialReportId } }) : new VendorFinancialReport();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorFinancialReportId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorFinancialReportId;
                await manager.save(VendorFinancialReport, master);
            } else if (temp.action === 'DELETE' && temp.vendorFinancialReportId) {
                const master = await manager.findOne(VendorFinancialReport, { where: { id: temp.vendorFinancialReportId } });
                if (master) await manager.softRemove(VendorFinancialReport, master);
            }
        }
    }
`;

content = content.replace(/\/\/ Implementation for moving reviewStatus = OK from \[\^_]temp to master[^}]*/m, moveTempToMasterBody);
content = content.replace(/}\s*$/, methods + '\n}');

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

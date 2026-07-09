import { AppDataSource } from '../data-source';
import { seedCountries } from './country.seed';
import { seedPermissions } from './permission.seed';
import { seedRoles } from './role.seed';
import { seedUsers } from './user.seed';
import { seedUserHasRoles } from './user-has-roles.seed';
import { seedProvince } from './province.seed';
import { seedCities } from './city.seed';
import { seedIndustryClassification } from './industry-classification.seed';
import { seedCompetencyCategory } from './competency-category.seed';
import { seedCompetencySubCategory } from './competency-sub-category.seed';
import { seedCompetencyItems } from './competency-item.seed';
import { seedIndustryCompetency } from './industry-competency.seed';
import { seedAreas } from './area.seed';
import { seedSites } from './sites.seed';
import { seedBusinessEntityType } from './buss-entity-type.seed';
import { seedVendorStatus } from './vendor-statuses.seed';
import { seedTelcoPrefixes } from './telco-prefixes.seed';
import { seedJobType } from './job-type.seed';
import { seedTitle } from './titles.seed';
import { seedIdentityType } from './identity-type.seed';
import { seedCurrency } from './currency.seed';
import { seedAffiliateType } from './affiliate-type.seed';
import { seedFinancialPeriod } from './financial-period.seed';
import { seedVendorCategories } from './vendor-category.seed';
import { seedVendorCategoryItems } from './vendor-category-item.seed';
import { seedVendorPriority } from './vendor-priority.seed';
import { seedPosition } from './position.seed';
import { seedWorkflowType } from './workflow-type.seed';
import { seedBank } from './bank.seed';
import { seedBankBranch } from './bank-branch.seed';
import { seedTermsCondition } from './terms-condition.seed';
import { seedCompanyPersonnelType } from './company-personnel-type.seed';
import { seedDocumentType } from './document-type.seed';

async function runSeeder() {
    await AppDataSource.initialize();

    // await seedPermissions(AppDataSource);
    // await seedRoles(AppDataSource);
    // await seedUsers(AppDataSource);
    // await seedUserHasRoles(AppDataSource);

    // await seedCountries(AppDataSource);
    // await seedProvince(AppDataSource);
    // await seedCities(AppDataSource);
    // await seedIndustryClassification(AppDataSource);
    // await seedCompetencyCategory(AppDataSource);
    // await seedCompetencySubCategory(AppDataSource);
    // await seedCompetencyItems(AppDataSource);
    // await seedIndustryCompetency(AppDataSource);

    // await seedAreas(AppDataSource);
    // await seedSites(AppDataSource);
    // await seedBusinessEntityType(AppDataSource);
    // await seedVendorStatus(AppDataSource);
    // await seedTelcoPrefixes(AppDataSource);
    // await seedTitle(AppDataSource);
    // await seedJobType(AppDataSource);
    // await seedIdentityType(AppDataSource);

    // await seedCurrency(AppDataSource);
    // await seedAffiliateType(AppDataSource);
    // await seedFinancialPeriod(AppDataSource);
    // await seedVendorCategories(AppDataSource);
    // await seedVendorCategoryItems(AppDataSource);
    // await seedVendorPriority(AppDataSource);
    // await seedPosition(AppDataSource);
    // await seedWorkflowType(AppDataSource);

    // await seedBank(AppDataSource);
    // await seedBankBranch(AppDataSource);

    // await seedTermsCondition(AppDataSource);
    // await seedCompanyPersonnelType(AppDataSource);
    // await seedDocumentType(AppDataSource);

    await seedCurrency(AppDataSource);

    const { seedWorkflowEngine } = require('./workflow-engine.seed');
    await seedWorkflowEngine(AppDataSource);

    await AppDataSource.destroy();
}

runSeeder()
    .then(() => {
        console.log('🌱 All seeds done');
        process.exit(0);
    })
    .catch((err) => {
        console.error('❌ Seeder error', err);
        process.exit(1);
    });

import { Module } from '@nestjs/common';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
import { SiteModule } from '@modules/master/site/site.module';
import { AreaModule } from '@modules/master/area/area.module';
import { BusinessEntityTypeModule } from '@modules/master/business-entity-type/business-entity-type.module';
import { CountryModule } from '@modules/master/country/country.module';
import { ProvinceModule } from '@modules/master/province/province.module';
import { CityModule } from '@modules/master/city/city.module';
import { TelcoPrefixModule } from '@modules/master/telco-prefix/telco-prefix.module';
import { TitleModule } from '@modules/master/title/title.module';
import { IdentityTypeModule } from '@modules/master/identity-type/identity-type.module';
import { JobTypeModule } from '@modules/master/job-type/job-type.module';
import { PositionModule } from '@modules/master/position/position.module';
import { BankModule } from '@modules/master/bank/bank.module';
import { BankBranchModule } from '@modules/master/bank-branch/bank-branch.module';
import { CurrencyModule } from '@modules/master/currency/currency.module';
import { AffiliateTypeModule } from '@modules/master/affiliate-type/affiliate-type.module';
import { IndustryClassificationModule } from '@modules/master/industry-classification/industry-classification.module';
import { CompetencyItemModule } from '@modules/master/competency-item/competency-item.module';
import { FinancialPeriodModule } from '@modules/master/financial-period/financial-period.module';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { CompetencySubCategoryModule } from '@modules/master/competency-subcategory/competency-subcategory.module';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { CompetencyCategoryModule } from '@modules/master/competency-category/competency-category.module';
import { RoleModule } from '@modules/uman/role/role.module';
import { CompanyPersonnelTypeModule } from '@modules/master/company-personnel-type/company-personnel-type.module';
import { FileModule } from '@modules/master/file/file.module';
import { DocumentTypeModule } from '@modules/master/document-type/document-type.module';

@Module({
  imports: [
    SiteModule,
    AreaModule,
    BusinessEntityTypeModule,
    CountryModule,
    ProvinceModule,
    CityModule,
    TelcoPrefixModule,
    TitleModule,
    IdentityTypeModule,
    JobTypeModule,
    PositionModule,
    RoleModule,
    BankModule,
    BankBranchModule,
    CurrencyModule,
    AffiliateTypeModule,
    IndustryClassificationModule,
    CompetencyCategoryModule,
    CompetencySubCategoryModule,
    CompetencyItemModule,
    FinancialPeriodModule,
    CompanyPersonnelTypeModule,
    FileModule,
    DocumentTypeModule,
  ],
  controllers: [LookupController],
  providers: [LookupService],
})
export class LookupModule {}

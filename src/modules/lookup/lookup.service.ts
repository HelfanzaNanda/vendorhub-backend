import { AffiliateTypeService } from '@modules/master/affiliate-type/affiliate-type.service';
import { AreaService } from '@modules/master/area/area.service';
import { BankBranchService } from '@modules/master/bank-branch/bank-branch.service';
import { BankService } from '@modules/master/bank/bank.service';
import { BusinessEntityTypeService } from '@modules/master/business-entity-type/business-entity-type.service';
import { CityService } from '@modules/master/city/city.service';
import { CompetencyItemService } from '@modules/master/competency-item/competency-item.service';
import { CountryService } from '@modules/master/country/country.service';
import { CurrencyService } from '@modules/master/currency/currency.service';
import { FinancialPeriodService } from '@modules/master/financial-period/financial-period.service';
import { IdentityTypeService } from '@modules/master/identity-type/identity-type.service';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';
import { IndustryClassificationService } from '@modules/master/industry-classification/industry-classification.service';
import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { JobTypeService } from '@modules/master/job-type/job-type.service';
import { PositionService } from '@modules/master/position/position.service';
import { ProvinceService } from '@modules/master/province/province.service';
import { SiteService } from '@modules/master/site/site.service';
import { TelcoPrefixService } from '@modules/master/telco-prefix/telco-prefix.service';
import { TitleService } from '@modules/master/title/title.service';
import { Injectable } from '@nestjs/common';
import { LookupMapper } from './mapper/lookup.mapper';
import { RoleService } from '@modules/uman/role/role.service';
import { CompanyPersonnelTypeService } from '@modules/master/company-personnel-type/company-personnel-type.service';
import { DocumentTypeService } from '@modules/master/document-type/document-type.service';

@Injectable()
export class LookupService {
    constructor(
        private siteService: SiteService,
        private areaService: AreaService,
        private businessEntityTypeService: BusinessEntityTypeService,
        private countryService: CountryService,
        private provinceService: ProvinceService,
        private cityService: CityService,
        private titleService: TitleService,
        private telcoPrefixService: TelcoPrefixService,
        private identityTypeService: IdentityTypeService,
        private jobTypeService: JobTypeService,
        private positionService: PositionService,
        private roleService: RoleService,
        private bankService: BankService,
        private bankBranchService: BankBranchService,
        private currencyService: CurrencyService,
        private AffiliateTypeService: AffiliateTypeService,
        private industryClassificationService: IndustryClassificationService,
        private competencyItemService: CompetencyItemService,
        private financialPeriodService: FinancialPeriodService,
        private companyPersonnelTypeService: CompanyPersonnelTypeService,
        private documentTypeService: DocumentTypeService,
    ) {}

    async getSites(areaId: number) {
        return await this.siteService.findOptions(areaId);
    }

    async getAreas() {
        return await this.areaService.findOptions();
    }

    async getBusinessEntityTypes() {
        return await this.businessEntityTypeService.findOptions();
    }

    async getCountries() {
        return await this.countryService.findOptions();
    }

    async getProvinces(countryId: number) {
        return await this.provinceService.findOptions(countryId);
    }

    async getCities(provinceId: number) {
        return await this.cityService.findOptions(provinceId);
    }

    async getTiles() {
        return await this.titleService.findOptions();
    }

    async getTelcoPrefixes() {
        return await this.telcoPrefixService.findOptions();
    }

    async getIdentityTypes() {
        return await this.identityTypeService.findOptions();
    }

    async getJobTypes() {
        return await this.jobTypeService.findOptions();
    }

    async getPositions() {
        return await this.positionService.findOptions();
    }

    async getRoles(type: 'INTERNAL' | 'EXTERNAL') {
        return await this.roleService.findOptions(type);
    }

    async getBanks(countryId: number) {
        return await this.bankService.findOptions(countryId);
    }

    async getBankBranch(bankId: number) {
        return await this.bankBranchService.findOptions(bankId);
    }

    async getCurrencies() {
        return await this.currencyService.findOptions();
    }

    async getAffiliateTypes() {
        return await this.AffiliateTypeService.findOptions();
    }

    async getIndustryClassifications() {
        return await this.industryClassificationService.findOptions();
    }

    async getCompetencies(industryClassificationId: number) {
        return await this.competencyItemService.findOptions(
            industryClassificationId,
        );
    }

    async getYears() {
        const currentYear = new Date().getFullYear();

        const years = Array.from(
            { length: 5 },
            (_, index) => currentYear - index,
        );

        return LookupMapper.toResponses(
            years,
            (year) => year,
            (year) => year.toString(),
        );
    }

    async getFinancialPeriods() {
        return await this.financialPeriodService.findOptions();
    }

    async getCompanyPersonnelTypes() {
        return await this.companyPersonnelTypeService.findOptions();
    }

    async getDocumentTypes() {
        return await this.documentTypeService.findOptions();
    }
}

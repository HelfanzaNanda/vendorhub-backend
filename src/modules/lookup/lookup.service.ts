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
import { EntityManager, In } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { VendorCategoryService } from '@modules/master/vendor-category/vendor-category.service';
import { VendorCategoryItemService } from '@modules/master/vendor-category-item/vendor-category-item.service';

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
        private financialPeriodService: FinancialPeriodService,
        private companyPersonnelTypeService: CompanyPersonnelTypeService,
        private documentTypeService: DocumentTypeService,
        private vendorCategoryService: VendorCategoryService,
        private vendorCategoryItemService: VendorCategoryItemService,
        @InjectEntityManager()
        private entityManager: EntityManager,
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

    async getTitles(excludeCodes?: string[]) {
        return await this.titleService.findOptions(excludeCodes);
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
        const positions = await this.positionService.findOptions();
        try {
            const roles = await this.roleService.findOptions('EXTERNAL');
            const vendorRole = roles.find((r: any) => r.name === 'Vendor');
            if (vendorRole) {
                return positions.map((p: any) => {
                    if (p.name === 'Admin Vendor') {
                        return { ...p, defaultRoles: [vendorRole.id] };
                    }
                    return p;
                });
            }
        } catch (e) {
            // ignore
        }
        return positions;
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

    async getCompetencyTree(industryClassificationIds?: number[]) {
        const categories = await this.entityManager.find(CompetencyCategory, {
            order: { name: 'ASC' },
        });

        const subCategories = await this.entityManager.find(CompetencySubCategory, {
            relations: ['competencyCategory'],
            order: { name: 'ASC' },
        });

        const itemsQuery = this.entityManager
            .createQueryBuilder(CompetencyItem, 'item')
            .leftJoinAndSelect('item.competencySubCategory', 'subCategory')
            .leftJoin('item.industryClassifications', 'ic');

        if (industryClassificationIds && industryClassificationIds.length > 0) {
            itemsQuery.where('ic.id IN (:...ids)', { ids: industryClassificationIds });
        }

        itemsQuery.orderBy('item.name', 'ASC');

        const items = await itemsQuery.getMany();

        const result = [];
        for (const cat of categories) {
            const catNode = {
                id: cat.id,
                name: cat.name,
                type: 'CATEGORY',
                selectable: false,
                children: [] as any[],
            };

            const catSubs = subCategories.filter(
                (s) => s.competencyCategory?.id === cat.id,
            );
            for (const sub of catSubs) {
                const subNode = {
                    id: sub.id,
                    name: sub.name,
                    type: 'SUB_CATEGORY',
                    selectable: false,
                    children: [] as any[],
                };

                const subItems = items.filter(
                    (i) => i.competencySubCategory?.id === sub.id,
                );
                for (const item of subItems) {
                    subNode.children.push({
                        id: item.id,
                        name: item.name,
                        type: 'SUB_CATEGORY_ITEM',
                        selectable: true,
                    });
                }

                if (subNode.children.length > 0) {
                    catNode.children.push(subNode);
                }
            }

            if (catNode.children.length > 0) {
                result.push(catNode);
            }
        }

        return result;
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

    async getVendorCategories() {
        return await this.vendorCategoryService.findOptions();
    }

    async getVendorCategoryItems(vendorCategoryId: number) {
        return await this.vendorCategoryItemService.findOptions(vendorCategoryId);
    }
}

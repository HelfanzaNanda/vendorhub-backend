import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseArrayPipe,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { LookupService } from './lookup.service';

@Controller('lookups')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class LookupController {
    constructor(private service: LookupService) {}

    @Get('sites')
    getSites(@Query('areaId') areaId: number) {
        return this.service.getSites(areaId);
    }

    @Get('areas')
    getAreas() {
        return this.service.getAreas();
    }

    @Get('business-entity-types')
    getBusinessEntityTypes() {
        return this.service.getBusinessEntityTypes();
    }

    @Get('countries')
    getCountries() {
        return this.service.getCountries();
    }

    @Get('provinces')
    getProvinces(@Query('countryId') countryId: number) {
        return this.service.getProvinces(countryId);
    }

    @Get('cities')
    getCities(@Query('provinceId') provinceId: number) {
        return this.service.getCities(provinceId);
    }

    @Get('telco-prefixes')
    getTelcoPrefixes() {
        return this.service.getTelcoPrefixes();
    }

    @Get('titles')
    getTiles() {
        return this.service.getTiles();
    }

    @Get('identity-types')
    getIdentityTypes() {
        return this.service.getIdentityTypes();
    }

    @Get('job-types')
    getPositionTypes() {
        return this.service.getJobTypes();
    }

    @Get('positions')
    getPositions() {
        return this.service.getPositions();
    }

    @Get('roles')
    getRoles(@Query('type') type: 'INTERNAL' | 'EXTERNAL') {
        return this.service.getRoles(type);
    }

    @Get('banks')
    getBanks(@Query('countryId') countryId: number) {
        return this.service.getBanks(countryId);
    }

    @Get('bank-branchs')
    getBankBranch(@Query('bankId') bankId: number) {
        return this.service.getBankBranch(bankId);
    }

    @Get('currencies')
    getCurrencies() {
        return this.service.getCurrencies();
    }

    @Get('affiliate-types')
    getAffiliateTypes() {
        return this.service.getAffiliateTypes();
    }

    @Get('industry-classifications')
    getIndustryClassifications() {
        return this.service.getIndustryClassifications();
    }

    @Get('competency-tree')
    getCompetencies(
        @Query(
            'industryClassificationIds',
            new ParseArrayPipe({ items: Number, separator: ',', optional: true }),
        )
        industryClassificationIds: number[],
    ) {
        return this.service.getCompetencyTree(industryClassificationIds);
    }

    @Get('years')
    getYears() {
        return this.service.getYears(); 
    }

    @Get('financial-periods')
    getFinancialPeriods() {
        return this.service.getFinancialPeriods();
    }

    @Get('company-personnel-types')
    getCompanyPersonnelTypes() {
        return this.service.getCompanyPersonnelTypes();
    }

    @Get('document-types')
    getDocumentTypes() {
        return this.service.getDocumentTypes();
    }

    @Get('vendor-categories')
    getVendorCategories() {
        return this.service.getVendorCategories();
    }

    @Get('vendor-category-items')
    getVendorCategoryItems(@Query('vendorCategoryId') vendorCategoryId: number) {
        return this.service.getVendorCategoryItems(vendorCategoryId);
    }
}

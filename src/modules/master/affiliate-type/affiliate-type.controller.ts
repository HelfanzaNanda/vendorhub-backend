import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
// import { AffiliateTypeDto } from "./dto/create-affiliate-type.dto";
// import { AffiliateTypeDto } from "./dto/update-affiliate-type.dto";
import { AffiliateTypeService } from "./affiliate-type.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { CreateAffiliateTypeDto } from "./dto/create-affiliate-type.dto";
import { UpdateAffiliateTypeDto } from "./dto/update-affiliate-type.dto";

@Controller('countries')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class AffiliateTypeController {

    constructor(private service: AffiliateTypeService) { }


    @Get()
    @RequirePermission('affiliate.type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('affiliate.type.create')
    create(@Body() dto: CreateAffiliateTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('affiliate.type.update')
    update(@Param('id') id: number, @Body() dto: UpdateAffiliateTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('affiliate.type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

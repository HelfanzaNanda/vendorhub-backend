import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateIndustryClassificationDto } from "./dto/create-industry-classification.dto";
import { UpdateIndustryClassificationDto } from "./dto/update-industry-classification.dto";
import { IndustryClassificationService } from "./industry-classification.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('industry-classifications')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class IndustryClassificationController {

    constructor(private service: IndustryClassificationService) { }


    @Get()
    @RequirePermission('industry-classification.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('industry-classification.create')
    create(@Body() dto: CreateIndustryClassificationDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('industry-classification.update')
    update(@Param('id') id: number, @Body() dto: UpdateIndustryClassificationDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('industry-classification.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

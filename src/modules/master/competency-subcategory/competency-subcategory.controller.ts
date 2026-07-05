import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { CreateCompetencySubCategoryDto } from './dto/create-competency-subcategory.dto';
import { UpdateCompetencySubCategoryDto } from './dto/update-competency-subcategory.dto';
import { CompetencySubCategoryService } from './competency-subcategory.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('competency-sub-categories')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CompetencySubCategoryController {
    constructor(private service: CompetencySubCategoryService) {}

    @Get()
    @RequirePermission('competency-subcategory.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('competency-subcategory.create')
    create(@Body() dto: CreateCompetencySubCategoryDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('competency-subcategory.update')
    update(
        @Param('id') id: number,
        @Body() dto: UpdateCompetencySubCategoryDto,
    ) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('competency-subcategory.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

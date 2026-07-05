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
import { CreateCompetencyCategoryDto } from './dto/create-competency-category.dto';
import { UpdateCompetencyCategoryDto } from './dto/update-competency-category.dto';
import { CompetencyCategoryService } from './competency-category.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('competency-categories')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CompetencyCategoryController {
    constructor(private service: CompetencyCategoryService) {}

    @Get()
    @RequirePermission('competency-category.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('competency-category.create')
    create(@Body() dto: CreateCompetencyCategoryDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('competency-category.update')
    update(@Param('id') id: number, @Body() dto: UpdateCompetencyCategoryDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('competency-category.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

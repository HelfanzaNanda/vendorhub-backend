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
import { CreateCompetencyItemDto } from './dto/create-competency-item.dto';
import { UpdateCompetencyItemDto } from './dto/update-competency-item.dto';
import { CompetencyItemService } from './competency-item.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('competency-items')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CompetencyItemController {
    constructor(private service: CompetencyItemService) {}

    @Get()
    @RequirePermission('competency-item.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('competency-item.create')
    create(@Body() dto: CreateCompetencyItemDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('competency-item.update')
    update(@Param('id') id: number, @Body() dto: UpdateCompetencyItemDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('competency-item.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

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
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ProvinceService } from './province.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('provinces')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ProvinceController {
    constructor(private service: ProvinceService) {}

    @Get()
    @RequirePermission('province.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('province.create')
    create(@Body() dto: CreateProvinceDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('province.update')
    update(@Param('id') id: number, @Body() dto: UpdateProvinceDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('province.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

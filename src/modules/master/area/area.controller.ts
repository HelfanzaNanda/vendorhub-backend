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
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { AreaService } from './area.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('areas')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class AreaController {
    constructor(private service: AreaService) {}

    @Get()
    @RequirePermission('area.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('area.create')
    create(@Body() dto: CreateAreaDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('area.update')
    update(@Param('id') id: number, @Body() dto: UpdateAreaDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('area.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

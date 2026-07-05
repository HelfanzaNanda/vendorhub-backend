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
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { TitleService } from './title.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('titles')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class TitleController {
    constructor(private service: TitleService) {}

    @Get()
    @RequirePermission('title.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('title.create')
    create(@Body() dto: CreateTitleDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('title.update')
    update(@Param('id') id: number, @Body() dto: UpdateTitleDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('title.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

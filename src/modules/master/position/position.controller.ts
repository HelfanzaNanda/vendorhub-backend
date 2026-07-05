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
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionService } from './position.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('positions')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class PositionController {
    constructor(private service: PositionService) {}

    @Get()
    @RequirePermission('position.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('position.create')
    create(@Body() dto: CreatePositionDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('position.update')
    update(@Param('id') id: number, @Body() dto: UpdatePositionDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('position.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

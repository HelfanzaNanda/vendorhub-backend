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
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { WorkingCalendarService } from './working-calendar.service';
import { CreateWorkingCalendarDto } from './dto/create-working-calendar.dto';
import { UpdateWorkingCalendarDto } from './dto/update-working-calendar.dto';

@Controller('working-calendars')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WorkingCalendarController {
    constructor(private service: WorkingCalendarService) {}

    @Get()
    @RequirePermission('working-calendar.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('working-calendar.create')
    create(@Body() dto: CreateWorkingCalendarDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('working-calendar.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateWorkingCalendarDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('working-calendar.delete')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}

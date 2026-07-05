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
import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';
import { JobTypeService } from './job-type.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('job-types')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class JobTypeController {
    constructor(private service: JobTypeService) {}

    @Get()
    @RequirePermission('job-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('job-type.create')
    create(@Body() dto: CreateJobTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('job-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateJobTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('job-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

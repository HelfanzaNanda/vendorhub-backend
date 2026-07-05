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
import { VendorStatusService } from './vendor-status.service';
import { CreateVendorStatusDto } from './dto/create-vendor-status.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';

@Controller('vendor-statuses')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorStatusController {
    constructor(private service: VendorStatusService) {}

    @Get()
    @RequirePermission('vendor-status.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-status.create')
    create(@Body() dto: CreateVendorStatusDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-status.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorStatusDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-status.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

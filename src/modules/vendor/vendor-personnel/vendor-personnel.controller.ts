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
import { CreateVendorPersonnelDto } from './dto/create-vendor-personnel.dto';
import { UpdateVendorPersonnelDto } from './dto/update-vendor-personnel.dto';
import { VendorPersonnelService } from './vendor-personnel.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('vendor-personnels')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorPersonnelController {
    constructor(private service: VendorPersonnelService) {}

    @Get()
    @RequirePermission('vendor-personnel.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-personnel.create')
    create(@Body() dto: CreateVendorPersonnelDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-personnel.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorPersonnelDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-personnel.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

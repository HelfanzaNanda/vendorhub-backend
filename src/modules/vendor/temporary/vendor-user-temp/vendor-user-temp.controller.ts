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
import { CreateVendorUserTempDto } from './dto/create-vendor-user-temp.dto';
import { UpdateVendorUserTempDto } from './dto/update-vendor-user-temp.dto';
import { VendorUserTempService } from './vendor-user-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { Public } from '@common/decorators/public.decorator';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { DataSource } from '@common/enums';

@Controller('vendor-user-temps')
@UseGuards(JwtAuthGuard)
export class VendorUserTempController {
    constructor(private service: VendorUserTempService) {}

    @Get()
    // @RequirePermission('vendor-user-temp.pagination')
    // @Public()
    pagination(@CurrentVendorId() vendorId: number, @Query() query: PaginationQueryDto) {
        return this.service.pagination(vendorId, query);
    }

    @Post()
    // @RequirePermission('vendor-user-temp.create')
    // @Public()
    create(@CurrentVendorId() vendorId: number, @Body() dto: CreateVendorUserTempDto) {
        return this.service.create(vendorId, dto);
    }

    @Get(':id')
    findOne(
        @CurrentVendorId() vendorId: number, 
        @Param('id', ParseIntPipe) id: number,
        @Query('source') source: DataSource
    ) {
        return this.service.findOne(vendorId, id, source === DataSource.MASTER);
    }

    @Put(':id')
    // @RequirePermission('vendor-user-temp.update')
    // @Public()
    update(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number, 
        @Body() dto: UpdateVendorUserTempDto
    ) {
        return this.service.update(vendorId, id, dto, dto.source === DataSource.MASTER);
    }

    @Delete(':id')
    // @RequirePermission('vendor-user-temp.delete')
    // @Public()
    remove(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number,
        @Body('source') source: DataSource
    ) {
        return this.service.delete(vendorId, id, source === DataSource.MASTER);
    }
}

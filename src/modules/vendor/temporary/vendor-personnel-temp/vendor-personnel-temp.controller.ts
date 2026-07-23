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
import { CreateVendorPersonnelTempDto } from './dto/create-vendor-personnel-temp.dto';
import { DeleteVendorPersonnelTempDto, UpdateVendorPersonnelTempDto } from './dto/update-vendor-personnel-temp.dto';
import { VendorPersonnelTempService } from './vendor-personnel-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { Public } from '@common/decorators/public.decorator';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { DataSource } from '@common/enums';

@Controller('vendor-personnel-temps')
@UseGuards(JwtAuthGuard)
export class VendorPersonnelTempController {
    constructor(private service: VendorPersonnelTempService) {}

    @Get()
    // @Public()
    // @RequirePermission('vendor-personnel-temp.pagination')
    pagination(@CurrentVendorId() vendorId: number, @Query() query: PaginationQueryDto) {
        return this.service.pagination(vendorId, query);
    }

    @Post()
    // @Public()
    // @RequirePermission('vendor-personnel-temp.create')
    create(@CurrentVendorId() vendorId: number, @Body() dto: CreateVendorPersonnelTempDto) {
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
    // @Public()
    // @RequirePermission('vendor-personnel-temp.update')
    update(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number, 
        @Body() dto: UpdateVendorPersonnelTempDto
    ) {
        return this.service.update(vendorId, id, dto, dto.source === DataSource.MASTER);
    }

    @Delete(':id')
    // @Public()
    // @RequirePermission('vendor-personnel-temp.delete')
    remove(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number,
        @Body() dto: DeleteVendorPersonnelTempDto
    ) {
        return this.service.delete(vendorId, id, dto, dto.source === DataSource.MASTER);
    }
}

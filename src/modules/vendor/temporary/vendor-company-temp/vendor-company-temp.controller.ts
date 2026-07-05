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
import { CreateVendorCompanyTempDto } from './dto/create-vendor-company-temp.dto';
import { UpdateVendorCompanyTempDto } from './dto/update-vendor-company-temp.dto';
import { VendorCompanyTempService } from './vendor-company-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('vendor-company-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorCompanyTempController {
    constructor(private service: VendorCompanyTempService) {}

    @Get()
    @RequirePermission('vendor-company-temp.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-company-temp.create')
    create(@Body() dto: CreateVendorCompanyTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-company-temp.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorCompanyTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-company-temp.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

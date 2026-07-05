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
import { CreateVendorDocumentDto } from './dto/create-vendor-document.dto';
import { UpdateVendorDocumentDto } from './dto/update-vendor-document.dto';
import { VendorDocumentService } from './vendor-document.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('vendor-documents')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorDocumentController {
    constructor(private service: VendorDocumentService) {}

    @Get()
    @RequirePermission('vendor-document.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('vendor-document.create')
    create(@Body() dto: CreateVendorDocumentDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('vendor-document.update')
    update(@Param('id') id: number, @Body() dto: UpdateVendorDocumentDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('vendor-document.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

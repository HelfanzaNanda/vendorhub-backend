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
import { CreateVendorDocumentTempDto } from './dto/create-vendor-document-temp.dto';
import { UpdateVendorDocumentTempDto } from './dto/update-vendor-document-temp.dto';
import { VendorDocumentTempService } from './vendor-document-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { Public } from '@common/decorators/public.decorator';

@Controller('vendor-document-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorDocumentTempController {
    constructor(private service: VendorDocumentTempService) {}

    @Get()
    // @RequirePermission('vendor-document-temp.pagination')
    @Public()
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    // @RequirePermission('vendor-document-temp.create')
    @Public()
    create(@Body() dto: CreateVendorDocumentTempDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    // @RequirePermission('vendor-document-temp.update')
    @Public()
    update(@Param('id') id: number, @Body() dto: UpdateVendorDocumentTempDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    // @RequirePermission('vendor-document-temp.delete')
    @Public()
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

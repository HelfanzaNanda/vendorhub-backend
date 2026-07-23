import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Get,
    Put,
    UseGuards,
    ParseArrayPipe,
} from '@nestjs/common';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { VendorDocumentTempService } from './vendor-document-temp.service';
import { Public } from '@common/decorators/public.decorator';
import { SaveVendorDocumentTempDto } from './dto/save-vendor-document-temp.dto';

@Controller('vendor-document-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorDocumentTempController {
    constructor(private service: VendorDocumentTempService) {}

    @Get()
    // @RequirePermission('vendor-document-temp.read')
    getSingleton(@CurrentVendorId() vendorId: number) {
        return this.service.getSingleton(vendorId);
    }

    @Put()
    // @RequirePermission('vendor-document-temp.update')
    saveSingleton(
        @CurrentVendorId() vendorId: number,
        @Body() dto: SaveVendorDocumentTempDto,
    ) {
        return this.service.saveSingletion(vendorId, dto);
    }
}

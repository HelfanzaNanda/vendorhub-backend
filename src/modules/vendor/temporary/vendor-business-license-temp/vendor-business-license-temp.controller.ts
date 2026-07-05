import { RequirePermission } from '@common/decorators/permissions.decorator';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
    Body,
    Controller,
    Get,
    Put,
    UseGuards,
} from '@nestjs/common';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { UpdateVendorBusinessLicenseTempDto } from './dto/update-vendor-business-license-temp.dto';
import { VendorBusinessLicenseTempService } from './vendor-business-license-temp.service';
import { Public } from '@common/decorators/public.decorator';

@Controller('vendor-business-license-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorBusinessLicenseTempController {
    constructor(private service: VendorBusinessLicenseTempService) {}

    @Get()
    // @RequirePermission('vendor-business-license-temp.read')
    getSingleton(@CurrentVendorId() vendorId: number) {
        return this.service.getSingleton(vendorId);
    }

    @Put()
    // @RequirePermission('vendor-business-license-temp.update')
    upsert(
        @CurrentVendorId() vendorId: number,
        @Body() dto: UpdateVendorBusinessLicenseTempDto,
    ) {
        return this.service.upsert(vendorId, dto);
    }
}

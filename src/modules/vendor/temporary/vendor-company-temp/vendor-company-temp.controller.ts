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
import { UpdateVendorCompanyTempDto } from './dto/update-vendor-company-temp.dto';
import { VendorCompanyTempService } from './vendor-company-temp.service';

@Controller('vendor-company-temps')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorCompanyTempController {
    constructor(private service: VendorCompanyTempService) {}

    @Get()
    // @RequirePermission('vendor-company-temp.read')
    getSingleton(@CurrentVendorId() vendorId: number) {
        return this.service.getSingleton(vendorId);
    }

    @Put()
    // @RequirePermission('vendor-company-temp.update')
    upsert(
        @CurrentVendorId() vendorId: number,
        @Body() dto: UpdateVendorCompanyTempDto,
    ) {
        return this.service.upsert(vendorId, dto);
    }
}

import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { VendorTermConditionService } from './vendor-term-condition.service';
import { CreateVendorTermConditionDto } from './dto/create-vendor-term-condition.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { RequirePermission } from '@common/decorators/permissions.decorator';

@Controller('vendor/terms-conditions')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VendorTermConditionController {
    constructor(private readonly service: VendorTermConditionService) {}

    @Get()
    findOne(@CurrentVendorId() vendorId: number) {
        return this.service.findOneByVendorId(vendorId);
    }

    @Post()
    // @RequirePermission('vendor-terms-conditions.create')
    create(@Body() dto: CreateVendorTermConditionDto, @CurrentVendorId() vendorId: number) {
        return this.service.create(dto, vendorId);
    }
}

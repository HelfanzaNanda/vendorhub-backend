import { Controller, Post, UseGuards, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { PermissionsGuard } from '@common/guards/permissions.guard';
import { CurrentUserId } from '@common/decorators/current-user-id.decorator';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { RoleExpiredService } from './role-expired.service';

@Controller('role-expired')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class RoleExpiredController {
    constructor(private readonly service: RoleExpiredService) {}

    @Post('submit')
    async submit(
        @CurrentUserId() userId: number,
        @CurrentVendorId() vendorId: number,
    ) {
        return this.service.submit(userId, vendorId);
    }
}

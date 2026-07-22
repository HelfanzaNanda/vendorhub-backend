import { Controller, Post, Body, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DevVendorService } from './dev-vendor.service';
import { CreateMasterVendorDto } from './dto/create-master-vendor.dto';

@ApiTags('Dev Vendor')
@Controller('/dev/vendors')
export class DevVendorController {
    constructor(private readonly devVendorService: DevVendorService) {}

    @Post('generate')
    @ApiOperation({ summary: 'Generate Master Vendor data for development' })
    async generateVendor(@Body() dto: CreateMasterVendorDto) {
        return this.devVendorService.generateVendor(dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete generated Vendor data' })
    async deleteVendor(@Param('id') id: string) {
        return this.devVendorService.deleteVendor(+id);
    }

    @Post('reset')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Reset all generated Vendor data' })
    async resetVendors() {
        return this.devVendorService.resetVendors();
    }
}

import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { Controller, Get, Param, UseGuards, } from '@nestjs/common';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { MetadataService } from './metadata.service';

@Controller('metadata')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class MetadataController {
    constructor(private service: MetadataService) { }

    @Get('document-types')
    getDocumentTypes() {
        return this.service.getDocumentTypes();
    }

    @Get('document-types/:code')
    getDocumentTypeByCode(@Param('code') code: string) {
        return this.service.getDocumentTypes(code);
    }


}

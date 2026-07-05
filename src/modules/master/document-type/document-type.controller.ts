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
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { DocumentTypeService } from './document-type.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('document-types')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class DocumentTypeController {
    constructor(private service: DocumentTypeService) {}

    @Get()
    @RequirePermission('document-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('document-type.create')
    create(@Body() dto: CreateDocumentTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('document-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateDocumentTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('document-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

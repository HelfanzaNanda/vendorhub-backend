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
import { CreateIdentityTypeDto } from './dto/create-identity-type.dto';
import { UpdateIdentityTypeDto } from './dto/update-identity-type.dto';
import { IdentityTypeService } from './identity-type.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('identity-types')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class IdentityTypeController {
    constructor(private service: IdentityTypeService) {}

    @Get()
    @RequirePermission('identity-type.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('identity-type.create')
    create(@Body() dto: CreateIdentityTypeDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('identity-type.update')
    update(@Param('id') id: number, @Body() dto: UpdateIdentityTypeDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('identity-type.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

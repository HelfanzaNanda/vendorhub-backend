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
import { CreateTelcoPrefixDto } from './dto/create-telco-prefix.dto';
import { UpdateTelcoPrefixDto } from './dto/update-telco-prefix.dto';
import { TelcoPrefixService } from './telco-prefix.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('telco-prefixes')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class TelcoPrefixController {
    constructor(private service: TelcoPrefixService) {}

    @Get()
    @RequirePermission('telco-prefix.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('telco-prefix.create')
    create(@Body() dto: CreateTelcoPrefixDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('telco-prefix.update')
    update(@Param('id') id: number, @Body() dto: UpdateTelcoPrefixDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('telco-prefix.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

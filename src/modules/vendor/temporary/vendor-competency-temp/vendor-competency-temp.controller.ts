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
import { CreateVendorCompetencyTempDto } from './dto/create-vendor-competency-temp.dto';
import { UpdateVendorCompetencyTempDto } from './dto/update-vendor-competency-temp.dto';
import { VendorCompetencyTempService } from './vendor-competency-temp.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { CurrentVendorId } from '@common/decorators/current-vendor-id.decorator';
import { DataSource } from '@common/enums';

@Controller('vendor-competency-temps')
@UseGuards(JwtAuthGuard)
export class VendorCompetencyTempController {
    constructor(private service: VendorCompetencyTempService) {}

    @Get()
    pagination(@CurrentVendorId() vendorId: number, @Query() query: PaginationQueryDto) {
        return this.service.pagination(vendorId, query);
    }

    @Post()
    create(@CurrentVendorId() vendorId: number, @Body() dto: CreateVendorCompetencyTempDto) {
        return this.service.create(vendorId, dto);
    }

    @Get(':id')
    findOne(
        @CurrentVendorId() vendorId: number, 
        @Param('id', ParseIntPipe) id: number,
        @Query('source') source: DataSource
    ) {
        return this.service.findOne(vendorId, id, source === DataSource.MASTER);
    }

    @Put(':id')
    update(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number, 
        @Body() dto: UpdateVendorCompetencyTempDto
    ) {
        return this.service.update(vendorId, id, dto, dto.source === DataSource.MASTER);
    }

    @Delete(':id')
    remove(
        @CurrentVendorId() vendorId: number, 
        @Param('id') id: number,
        @Body('source') source: DataSource
    ) {
        return this.service.delete(vendorId, id, source === DataSource.MASTER);
    }
}

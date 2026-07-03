import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { CreateFileDto } from "./dto/create-file.dto";
import { UpdateFileDto } from "./dto/update-file.dto";
import { FileService } from "./file.service";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";

@Controller('files')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class FileController {
    constructor(private service: FileService) { }

    @Get()
    @RequirePermission('file.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    @RequirePermission('file.create')
    create(@Body() dto: CreateFileDto) {
        return this.service.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @RequirePermission('file.update')
    update(@Param('id') id: number, @Body() dto: UpdateFileDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @RequirePermission('file.delete')
    remove(@Param('id') id: number) {
        return this.service.delete(id);
    }
}

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
    UseInterceptors,
    UploadedFile,
    Res,
    StreamableFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileService } from './file.service';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';

@Controller('files')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class FileController {
    constructor(private service: FileService) {}

    @Get()
    // @RequirePermission('file.pagination')
    pagination(@Query() query: PaginationQueryDto) {
        return this.service.pagination(query);
    }

    @Post()
    // @RequirePermission('file.create')
    @UseInterceptors(FileInterceptor('file'))
    create(
        @Body() dto: CreateFileDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.service.create(dto, file);
    }

    @Get('download/:id')
    async download(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) res: Response) {
        const fileRecord = await this.service.findOne(id);
        const file = createReadStream(join(process.cwd(), fileRecord.storagePath));
        res.set({
            'Content-Type': fileRecord.mimeType,
            'Content-Disposition': `attachment; filename="${fileRecord.originalFileName}"`,
        });
        return new StreamableFile(file);
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

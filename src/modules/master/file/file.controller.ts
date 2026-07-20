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

    @Post('upload')
    // @RequirePermission('file.create')
    @UseInterceptors(FileInterceptor('file'))
    create(
        @Body() dto: CreateFileDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.service.upload(dto, file);
    }

    @Get(':uuid/download')
    async download(
        @Param('uuid') uuid: string, 
        @Res({ passthrough: true }) res: Response
    ) {
        const fileRecord = await this.service.findByUuid(uuid);
        const file = createReadStream(join(process.cwd(), fileRecord.storagePath));
        res.set({
            'Content-Type': fileRecord.mimeType,
            'Content-Disposition': `attachment; filename="${fileRecord.originalFileName}"`,
        });
        return new StreamableFile(file);
    }

    @Get(':uuid/view')
    async preview(
        @Param('uuid') uuid: string,
        @Res({ passthrough: true }) res: Response
    ) {
        const fileRecord = await this.service.findByUuid(uuid);
        return res.sendFile(
            fileRecord.fileName,
            {
                root: process.cwd() + '/uploads',
                headers: {
                    'Content-Type': fileRecord.mimeType,
                    'Content-Disposition': `inline`,
                },
            }
        );
    }

    @Delete(':uuid')
    // @RequirePermission('file.delete')
    remove(@Param('uuid') uuid: string) {
        return this.service.delete(uuid);
    }
}

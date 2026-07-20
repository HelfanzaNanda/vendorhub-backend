import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { IsNull, Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestContext } from '@common/context/request-context';
import { randomUUID } from 'crypto';
import { StorageDiskEnum } from '@common/enums/storage-disk.enum';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File)
        private repo: Repository<File>,
    ) {}

    async upload(data: CreateFileDto, file?: Express.Multer.File) {
        if (!file) {
            throw new Error('File is required');
        }

        const ext = file.originalname.split('.').pop();
        const entity = this.repo.create({
            ...data,
            uuid: randomUUID(),
            fileName: file.filename,
            originalFileName: file.originalname,

            extension: ext ? `.${ext}` : '',

            mimeType: file.mimetype,
            fileSize: file.size,

            storagePath: file.path,
            storageDisk: StorageDiskEnum.LOCAL,
            version: 1,
        });

        const record = await this.repo.save(entity);

        return {
            id: record.id,
            uuid: record.uuid,

            originalFileName: record.originalFileName,
            fileName: record.fileName,

            extension: record.extension,
            mimeType: record.mimeType,
            fileSize: record.fileSize,
        };
    }

    async findByUuid(uuid: string) {
        const file = await this.repo.findOne({
            where: {
                uuid,
                deletedAt: IsNull()
            }
        });

        if (!file) {
            throw new NotFoundException();
        }

        return file;
    }

    async delete(uuid: string) {
        const file = await this.repo.findOne({ where: { uuid } });
        if (!file) throw new NotFoundException(`Data with uuid ${uuid} not found`);

        const userId = RequestContext.userId;
        file.deletedBy = userId;
        file.deletedAt = new Date();

        return this.repo.save(file);
    }
}

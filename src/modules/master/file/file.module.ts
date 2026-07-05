import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File } from './entities/file.entity';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([File]),
        MulterModule.register({
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
        }),
    ],
    controllers: [FileController],
    providers: [FileService],
    exports: [FileService],
})
export class FileModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentType } from './entities/document-type.entity';
import { DocumentTypeController } from './document-type.controller';
import { DocumentTypeService } from './document-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([DocumentType])],
    controllers: [DocumentTypeController],
    providers: [DocumentTypeService],
    exports: [DocumentTypeService],
})
export class DocumentTypeModule {}

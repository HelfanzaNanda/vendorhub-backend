import { Module } from '@nestjs/common';
import { MetadataController } from './metadata.controller';
import { MetadataService } from './metadata.service';
import { DocumentTypeModule } from '@modules/master/document-type/document-type.module';

@Module({
    imports: [
        DocumentTypeModule,
    ],
    controllers: [MetadataController],
    providers: [MetadataService],
    exports: [MetadataService]
})
export class MetadataModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorDocumentTempController } from './vendor-document-temp.controller';
import { VendorDocumentTempService } from './vendor-document-temp.service';
import { DocumentTypeService } from '@modules/master/document-type/document-type.service';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorDocumentTemp, VendorDocument, DocumentType]),
        VendorTempModule,
    ],
    controllers: [VendorDocumentTempController],
    providers: [VendorDocumentTempService, DocumentTypeService],
    exports: [VendorDocumentTempService, DocumentTypeService],
})
export class VendorDocumentTempModule {}

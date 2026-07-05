import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { VendorDocumentTemp } from './entities/vendor-document-temp.entity';
import { VendorDocumentTempController } from './vendor-document-temp.controller';
import { VendorDocumentTempService } from './vendor-document-temp.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorDocumentTemp]),
        VendorTempModule,
    ],
    controllers: [VendorDocumentTempController],
    providers: [VendorDocumentTempService],
    exports: [VendorDocumentTempService],
})
export class VendorDocumentTempModule {}

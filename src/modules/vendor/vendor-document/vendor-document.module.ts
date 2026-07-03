import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorDocument } from './entities/vendor-document.entity';
import { VendorDocumentController } from './vendor-document.controller';
import { VendorDocumentService } from './vendor-document.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorDocument])],
  controllers: [VendorDocumentController],
  providers: [VendorDocumentService],
  exports: [VendorDocumentService],
})
export class VendorDocumentModule {}

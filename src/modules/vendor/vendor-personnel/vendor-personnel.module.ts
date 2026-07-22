import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorPersonnel } from './entities/vendor-personnel.entity';
import { VendorPersonnelController } from './vendor-personnel.controller';
import { VendorPersonnelService } from './vendor-personnel.service';
import { File } from '@modules/master/file/entities/file.entity';
import { VendorPersonnelDocument } from './entities/vendor-personnel-document.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorPersonnel, File, VendorPersonnelDocument])],
    controllers: [VendorPersonnelController],
    providers: [VendorPersonnelService],
    exports: [VendorPersonnelService],
})
export class VendorPersonnelModule {}

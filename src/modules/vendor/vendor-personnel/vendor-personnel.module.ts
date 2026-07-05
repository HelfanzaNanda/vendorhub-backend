import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorPersonnel } from './entities/vendor-personnel.entity';
import { VendorPersonnelController } from './vendor-personnel.controller';
import { VendorPersonnelService } from './vendor-personnel.service';

@Module({
    imports: [TypeOrmModule.forFeature([VendorPersonnel])],
    controllers: [VendorPersonnelController],
    providers: [VendorPersonnelService],
    exports: [VendorPersonnelService],
})
export class VendorPersonnelModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorPersonnelTemp } from './entities/vendor-personnel-temp.entity';
import { VendorPersonnelTempController } from './vendor-personnel-temp.controller';
import { VendorPersonnelTempService } from './vendor-personnel-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorPersonnelTemp])],
  controllers: [VendorPersonnelTempController],
  providers: [VendorPersonnelTempService],
  exports: [VendorPersonnelTempService],
})
export class VendorPersonnelTempModule {}

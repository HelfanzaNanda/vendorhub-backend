import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTemp } from './entities/vendor-temp.entity';
import { VendorTempController } from './vendor-temp.controller';
import { VendorTempService } from './vendor-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorTemp])],
  controllers: [VendorTempController],
  providers: [VendorTempService],
  exports: [VendorTempService],
})
export class VendorTempModule {}

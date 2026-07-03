import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { VendorUserTempController } from './vendor-user-temp.controller';
import { VendorUserTempService } from './vendor-user-temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorUserTemp])],
  controllers: [VendorUserTempController],
  providers: [VendorUserTempService],
  exports: [VendorUserTempService],
})
export class VendorUserTempModule {}

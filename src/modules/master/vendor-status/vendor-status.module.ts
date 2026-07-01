import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorStatus } from './entities/vendor-status.entity';
import { VendorStatusController } from './vendor-status.controller';
import { VendorStatusService } from './vendor-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorStatus])],
  controllers: [VendorStatusController],
  providers: [VendorStatusService],
})
export class VendorStatusModule {}

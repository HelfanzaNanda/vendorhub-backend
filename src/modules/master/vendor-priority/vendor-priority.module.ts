import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorPriority } from './entities/vendor-priority.entity';
import { VendorPriorityController } from './vendor-priority.controller';
import { VendorPriorityService } from './vendor-priority.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendorPriority])],
  controllers: [VendorPriorityController],
  providers: [VendorPriorityService],
})
export class VendorPriorityModule {}

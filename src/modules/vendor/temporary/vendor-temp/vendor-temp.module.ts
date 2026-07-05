import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTemp } from './entities/vendor-temp.entity';
import { VendorTempService } from './vendor-temp.service';
import { RunningNumberModule } from '@modules/running-number/running-number.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        RunningNumberModule
    ],
    providers: [VendorTempService],
    exports: [VendorTempService],
})
export class VendorTempModule {}

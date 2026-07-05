import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { VendorUserTempController } from './vendor-user-temp.controller';
import { VendorUserTempService } from './vendor-user-temp.service';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { User } from '@modules/uman/user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, VendorUserTemp]),
        VendorTempModule
    ],
    controllers: [VendorUserTempController],
    providers: [VendorUserTempService],
    exports: [VendorUserTempService],
})
export class VendorUserTempModule {}

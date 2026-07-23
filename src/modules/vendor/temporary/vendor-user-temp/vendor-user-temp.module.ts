import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { VendorUserTempController } from './vendor-user-temp.controller';
import { VendorUserTempService } from './vendor-user-temp.service';
import { VendorTempModule } from '../vendor-temp/vendor-temp.module';
import { User } from '@modules/uman/user/entities/user.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, VendorUserTemp, UserHasRole, Role, Area]),
        VendorTempModule
    ],
    controllers: [VendorUserTempController],
    providers: [VendorUserTempService],
    exports: [VendorUserTempService],
})
export class VendorUserTempModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentityType } from './entities/identity-type.entity';
import { IdentityTypeController } from './identity-type.controller';
import { IdentityTypeService } from './identity-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([IdentityType])],
    controllers: [IdentityTypeController],
    providers: [IdentityTypeService],
    exports: [IdentityTypeService],
})
export class IdentityTypeModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyPersonnelType } from './entities/company-personnel-type.entity';
import { CompanyPersonnelTypeController } from './company-personnel-type.controller';
import { CompanyPersonnelTypeService } from './company-personnel-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyPersonnelType])],
    controllers: [CompanyPersonnelTypeController],
    providers: [CompanyPersonnelTypeService],
    exports: [CompanyPersonnelTypeService],
})
export class CompanyPersonnelTypeModule {}

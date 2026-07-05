import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessEntityType } from './entities/business-entity-type.entity';
import { BusinessEntityTypeController } from './business-entity-type.controller';
import { BusinessEntityTypeService } from './business-entity-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([BusinessEntityType])],
    controllers: [BusinessEntityTypeController],
    providers: [BusinessEntityTypeService],
    exports: [BusinessEntityTypeService],
})
export class BusinessEntityTypeModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliateType } from './entities/affiliate-type.entity';
import { AffiliateTypeController } from './affiliate-type.controller';
import { AffiliateTypeService } from './affiliate-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([AffiliateType])],
    controllers: [AffiliateTypeController],
    providers: [AffiliateTypeService],
    exports: [AffiliateTypeService],
})
export class AffiliateTypeModule {}

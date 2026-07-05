import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsConditionItem } from './entities/terms-condition-item.entity';
import { TermsConditionItemController } from './terms-condition-item.controller';
import { TermsConditionItemService } from './terms-condition-item.service';

@Module({
    imports: [TypeOrmModule.forFeature([TermsConditionItem])],
    controllers: [TermsConditionItemController],
    providers: [TermsConditionItemService],
    exports: [TermsConditionItemService],
})
export class TermsConditionItemModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsConditionController } from './term-condition.controller';
import { TermsCondition } from './entities/term-condition.entity';
import { TermsConditionService } from './term-condition.service';
import { TermsConditionItem } from '../terms-condition-item/entities/terms-condition-item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TermsCondition, TermsConditionItem])],
    controllers: [TermsConditionController],
    providers: [TermsConditionService],
    exports: [TermsConditionService],
})
export class TermsConditionModule {}

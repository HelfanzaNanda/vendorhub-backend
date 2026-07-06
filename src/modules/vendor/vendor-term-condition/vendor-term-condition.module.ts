import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorTermCondition } from './entities/vendor-term-condition.entity';
import { VendorTermConditionReview } from './entities/vendor-term-condition-review.entity';
import { VendorTermConditionController } from './vendor-term-condition.controller';
import { VendorTermConditionService } from './vendor-term-condition.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            VendorTermCondition,
            VendorTermConditionReview,
        ]),
    ],
    controllers: [VendorTermConditionController],
    providers: [VendorTermConditionService],
    exports: [VendorTermConditionService],
})
export class VendorTermConditionModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustryClassification } from './entities/industry-classification.entity';
import { IndustryClassificationController } from './industry-classification.controller';
import { IndustryClassificationService } from './industry-classification.service';

@Module({
    imports: [TypeOrmModule.forFeature([IndustryClassification])],
    controllers: [IndustryClassificationController],
    providers: [IndustryClassificationService],
    exports: [IndustryClassificationService],
})
export class IndustryClassificationModule {}

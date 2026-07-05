import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RunningNumber } from './entities/running-number.entity';
import { RunningNumberService } from './running-number.service';

@Module({
    imports: [TypeOrmModule.forFeature([RunningNumber])],
    providers: [RunningNumberService],
    exports: [RunningNumberService],
})
export class RunningNumberModule {}

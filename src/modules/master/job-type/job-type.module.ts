import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobType } from './entities/job-type.entity';
import { JobTypeController } from './job-type.controller';
import { JobTypeService } from './job-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([JobType])],
    controllers: [JobTypeController],
    providers: [JobTypeService],
    exports: [JobTypeService],
})
export class JobTypeModule {}

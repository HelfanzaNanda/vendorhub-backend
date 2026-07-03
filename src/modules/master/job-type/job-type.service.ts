import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';
import { Repository } from 'typeorm';
import { JobType } from './entities/job-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { JOB_TYPE_FIELDS } from './query/job-type-field.meta';
import { RequestContext } from '@common/context/request-context';
import { JobTypeMapper } from './mapper/job-type.mapper';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';

@Injectable()
export class JobTypeService {
    constructor(
        @InjectRepository(JobType)
        private jobTypeRepo: Repository<JobType>
    ) { }

    async create(data: CreateJobTypeDto) {
        return this.jobTypeRepo.save(this.jobTypeRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.jobTypeRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(JOB_TYPE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, JOB_TYPE_FIELDS);
        return {
            data: JobTypeMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const jobType = await this.jobTypeRepo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true
                }
            },
            where: { id },
            relations: {
                createdByUser: true,
                updatedByUser: true
            }
        });
        if (!jobType) throw new NotFoundException();
        return JobTypeMapper.toResponse(jobType);
    }

    async update(id: number, data: UpdateJobTypeDto) {
        const jobType = await this.jobTypeRepo.findOne({ where: { id } });
        if (!jobType) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(jobType, data);
        return this.jobTypeRepo.save(jobType);
    }

    async delete(id: number) {
        const jobType = await this.jobTypeRepo.findOne({ where: { id } });
        if (!jobType) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        jobType.deletedBy = userId;
        jobType.deletedAt = new Date();

        return this.jobTypeRepo.save(jobType);
    }

    async findOptions() {
        const jobType = await this.jobTypeRepo.find();
        return LookupMapper.toResponses(
            jobType, 
            jobType => jobType.id,
            jobType => jobType.name
        );
    }
}

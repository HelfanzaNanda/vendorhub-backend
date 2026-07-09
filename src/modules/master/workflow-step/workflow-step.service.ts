import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterWorkflowStep } from './entities/workflow-step.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowStepDto } from './dto/create-workflow-step.dto';
import { WORKFLOW_STEP_FIELDS } from './query/workflow-step-field.meta';
import { WorkflowStepMapper } from './mapper/workflow-step.mapper';
import { UpdateWorkflowStepDto } from './dto/update-workflow-step.dto';

@Injectable()
export class WorkflowStepService {
    constructor(
        @InjectRepository(MasterWorkflowStep)
        private workflowStepRepo: Repository<MasterWorkflowStep>,
    ) {}

    async create(data: CreateWorkflowStepDto) {
        return this.workflowStepRepo.save(this.workflowStepRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowStepRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_STEP_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_STEP_FIELDS);
        return {
            data: WorkflowStepMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowStep = await this.workflowStepRepo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true,
                },
            },
            where: { id },
            relations: {
                createdByUser: true,
                updatedByUser: true,
            },
        });
        if (!workflowStep) throw new NotFoundException();
        return WorkflowStepMapper.toResponse(workflowStep as any);
    }

    async update(id: number, data: UpdateWorkflowStepDto) {
        const workflowStep = await this.workflowStepRepo.findOne({
            where: { id },
        });
        if (!workflowStep)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowStep, data);
        return this.workflowStepRepo.save(workflowStep);
    }

    async delete(id: number) {
        const workflowStep = await this.workflowStepRepo.findOne({
            where: { id },
        });
        if (!workflowStep)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowStep as any).deletedBy = userId;
        (workflowStep as any).deletedAt = new Date();

        return this.workflowStepRepo.save(workflowStep);
    }
}

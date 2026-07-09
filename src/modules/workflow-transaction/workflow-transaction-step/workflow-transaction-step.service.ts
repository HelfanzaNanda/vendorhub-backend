import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkflowTransactionStep } from './entities/workflow-transaction-step.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowTransactionStepDto } from './dto/create-workflow-transaction-step.dto';
import { WORKFLOW_TRANSACTION_STEP_FIELDS } from './query/workflow-transaction-step-field.meta';
import { WorkflowTransactionStepMapper } from './mapper/workflow-transaction-step.mapper';
import { UpdateWorkflowTransactionStepDto } from './dto/update-workflow-transaction-step.dto';

@Injectable()
export class WorkflowTransactionStepService {
    constructor(
        @InjectRepository(WorkflowTransactionStep)
        private workflowTransactionStepRepo: Repository<WorkflowTransactionStep>,
    ) {}

    async create(data: CreateWorkflowTransactionStepDto) {
        return this.workflowTransactionStepRepo.save(this.workflowTransactionStepRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowTransactionStepRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_TRANSACTION_STEP_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_TRANSACTION_STEP_FIELDS);
        return {
            data: WorkflowTransactionStepMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowTransactionStep = await this.workflowTransactionStepRepo.findOne({
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
        if (!workflowTransactionStep) throw new NotFoundException();
        return WorkflowTransactionStepMapper.toResponse(workflowTransactionStep as any);
    }

    async update(id: number, data: UpdateWorkflowTransactionStepDto) {
        const workflowTransactionStep = await this.workflowTransactionStepRepo.findOne({
            where: { id },
        });
        if (!workflowTransactionStep)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowTransactionStep, data);
        return this.workflowTransactionStepRepo.save(workflowTransactionStep);
    }

    async delete(id: number) {
        const workflowTransactionStep = await this.workflowTransactionStepRepo.findOne({
            where: { id },
        });
        if (!workflowTransactionStep)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowTransactionStep as any).deletedBy = userId;
        (workflowTransactionStep as any).deletedAt = new Date();

        return this.workflowTransactionStepRepo.save(workflowTransactionStep);
    }
}

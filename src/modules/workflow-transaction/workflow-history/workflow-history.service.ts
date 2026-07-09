import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkflowHistory } from './entities/workflow-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowHistoryDto } from './dto/create-workflow-history.dto';
import { WORKFLOW_HISTORY_FIELDS } from './query/workflow-history-field.meta';
import { WorkflowHistoryMapper } from './mapper/workflow-history.mapper';
import { UpdateWorkflowHistoryDto } from './dto/update-workflow-history.dto';

@Injectable()
export class WorkflowHistoryService {
    constructor(
        @InjectRepository(WorkflowHistory)
        private workflowHistoryRepo: Repository<WorkflowHistory>,
    ) {}

    async create(data: CreateWorkflowHistoryDto) {
        return this.workflowHistoryRepo.save(this.workflowHistoryRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowHistoryRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_HISTORY_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_HISTORY_FIELDS);
        return {
            data: WorkflowHistoryMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowHistory = await this.workflowHistoryRepo.findOne({
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
        if (!workflowHistory) throw new NotFoundException();
        return WorkflowHistoryMapper.toResponse(workflowHistory as any);
    }

    async update(id: number, data: UpdateWorkflowHistoryDto) {
        const workflowHistory = await this.workflowHistoryRepo.findOne({
            where: { id },
        });
        if (!workflowHistory)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowHistory, data);
        return this.workflowHistoryRepo.save(workflowHistory);
    }

    async delete(id: number) {
        const workflowHistory = await this.workflowHistoryRepo.findOne({
            where: { id },
        });
        if (!workflowHistory)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowHistory as any).deletedBy = userId;
        (workflowHistory as any).deletedAt = new Date();

        return this.workflowHistoryRepo.save(workflowHistory);
    }
}

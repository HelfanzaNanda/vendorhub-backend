import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterWorkflow } from './entities/workflow.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { WORKFLOW_FIELDS } from './query/workflow-field.meta';
import { WorkflowMapper } from './mapper/workflow.mapper';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@Injectable()
export class WorkflowService {
    constructor(
        @InjectRepository(MasterWorkflow)
        private workflowRepo: Repository<MasterWorkflow>,
    ) {}

    async create(data: CreateWorkflowDto) {
        return this.workflowRepo.save(this.workflowRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_FIELDS);
        return {
            data: WorkflowMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflow = await this.workflowRepo.findOne({
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
        if (!workflow) throw new NotFoundException();
        return WorkflowMapper.toResponse(workflow as any);
    }

    async update(id: number, data: UpdateWorkflowDto) {
        const workflow = await this.workflowRepo.findOne({
            where: { id },
        });
        if (!workflow)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflow, data);
        return this.workflowRepo.save(workflow);
    }

    async delete(id: number) {
        const workflow = await this.workflowRepo.findOne({
            where: { id },
        });
        if (!workflow)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflow as any).deletedBy = userId;
        (workflow as any).deletedAt = new Date();

        return this.workflowRepo.save(workflow);
    }
}

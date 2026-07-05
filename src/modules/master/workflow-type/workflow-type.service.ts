import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkflowType } from './entities/workflow-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowTypeDto } from './dto/create-workflow-type.dto';
import { WORKFLOW_TYPE_FIELDS } from './query/workflow-type-field.meta';
import { WorkflowTypeMapper } from './mapper/workflow-type.mapper';
import { UpdateWorkflowTypeDto } from './dto/update-workflow-type.dto';

@Injectable()
export class WorkflowTypeService {
    constructor(
        @InjectRepository(WorkflowType)
        private workflowTypeRepo: Repository<WorkflowType>,
    ) {}

    async create(data: CreateWorkflowTypeDto) {
        return this.workflowTypeRepo.save(this.workflowTypeRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowTypeRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_TYPE_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_TYPE_FIELDS);
        return {
            data: WorkflowTypeMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowType = await this.workflowTypeRepo.findOne({
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
        if (!workflowType) throw new NotFoundException();
        return WorkflowTypeMapper.toResponse(workflowType);
    }

    async update(id: number, data: UpdateWorkflowTypeDto) {
        const workflowType = await this.workflowTypeRepo.findOne({
            where: { id },
        });
        if (!workflowType)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowType, data);
        return this.workflowTypeRepo.save(workflowType);
    }

    async delete(id: number) {
        const workflowType = await this.workflowTypeRepo.findOne({
            where: { id },
        });
        if (!workflowType)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        workflowType.deletedBy = userId;
        workflowType.deletedAt = new Date();

        return this.workflowTypeRepo.save(workflowType);
    }
}

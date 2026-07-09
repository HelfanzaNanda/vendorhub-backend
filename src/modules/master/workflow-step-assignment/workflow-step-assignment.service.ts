import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterWorkflowStepAssignment } from './entities/workflow-step-assignment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowStepAssignmentDto } from './dto/create-workflow-step-assignment.dto';
import { WORKFLOW_STEP_ASSIGNMENT_FIELDS } from './query/workflow-step-assignment-field.meta';
import { WorkflowStepAssignmentMapper } from './mapper/workflow-step-assignment.mapper';
import { UpdateWorkflowStepAssignmentDto } from './dto/update-workflow-step-assignment.dto';

@Injectable()
export class WorkflowStepAssignmentService {
    constructor(
        @InjectRepository(MasterWorkflowStepAssignment)
        private workflowStepAssignmentRepo: Repository<MasterWorkflowStepAssignment>,
    ) {}

    async create(data: CreateWorkflowStepAssignmentDto) {
        return this.workflowStepAssignmentRepo.save(this.workflowStepAssignmentRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowStepAssignmentRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_STEP_ASSIGNMENT_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_STEP_ASSIGNMENT_FIELDS);
        return {
            data: WorkflowStepAssignmentMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowStepAssignment = await this.workflowStepAssignmentRepo.findOne({
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
        if (!workflowStepAssignment) throw new NotFoundException();
        return WorkflowStepAssignmentMapper.toResponse(workflowStepAssignment as any);
    }

    async update(id: number, data: UpdateWorkflowStepAssignmentDto) {
        const workflowStepAssignment = await this.workflowStepAssignmentRepo.findOne({
            where: { id },
        });
        if (!workflowStepAssignment)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowStepAssignment, data);
        return this.workflowStepAssignmentRepo.save(workflowStepAssignment);
    }

    async delete(id: number) {
        const workflowStepAssignment = await this.workflowStepAssignmentRepo.findOne({
            where: { id },
        });
        if (!workflowStepAssignment)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowStepAssignment as any).deletedBy = userId;
        (workflowStepAssignment as any).deletedAt = new Date();

        return this.workflowStepAssignmentRepo.save(workflowStepAssignment);
    }
}

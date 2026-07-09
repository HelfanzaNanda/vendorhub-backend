import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkflowTransaction } from './entities/workflow-transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowTransactionDto } from './dto/create-workflow-transaction.dto';
import { WORKFLOW_TRANSACTION_FIELDS } from './query/workflow-transaction-field.meta';
import { WorkflowTransactionMapper } from './mapper/workflow-transaction.mapper';
import { UpdateWorkflowTransactionDto } from './dto/update-workflow-transaction.dto';

@Injectable()
export class WorkflowTransactionService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private workflowTransactionRepo: Repository<WorkflowTransaction>,
    ) {}

    async create(data: CreateWorkflowTransactionDto) {
        return this.workflowTransactionRepo.save(this.workflowTransactionRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowTransactionRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_TRANSACTION_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_TRANSACTION_FIELDS);
        return {
            data: WorkflowTransactionMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
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
        if (!workflowTransaction) throw new NotFoundException();
        return WorkflowTransactionMapper.toResponse(workflowTransaction as any);
    }

    async update(id: number, data: UpdateWorkflowTransactionDto) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
            where: { id },
        });
        if (!workflowTransaction)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowTransaction, data);
        return this.workflowTransactionRepo.save(workflowTransaction);
    }

    async delete(id: number) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
            where: { id },
        });
        if (!workflowTransaction)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowTransaction as any).deletedBy = userId;
        (workflowTransaction as any).deletedAt = new Date();

        return this.workflowTransactionRepo.save(workflowTransaction);
    }
}

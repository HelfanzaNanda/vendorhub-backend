import { JwtPayload } from "@modules/auth/interfaces/jwt-payload.interface";
import { MasterWorkflow } from "@modules/master/workflow/entities/workflow.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { WorkflowTransactionStep } from "@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource, SelectQueryBuilder } from "typeorm";

@Injectable()
export class DelegationRepository {
    constructor(
        private readonly dataSource: DataSource,
    ) {}

    async getDelegateUsers(workflowTransactionStepId: number) {

        const transactionStep = await this.dataSource.getRepository(WorkflowTransactionStep)
            .createQueryBuilder('wts')
            .select([
                'wts.id',
                'wts.userId',
                'wts.delegationUserId',
                'wts.workflowStepId'
            ])
            .where('wts.id = :workflowTransactionStepId', { workflowTransactionStepId })
            .getOne();

        if (!transactionStep) {
            throw new NotFoundException(`Workflow transaction step ${workflowTransactionStepId} not found`);
        }

        if (transactionStep.delegationUserId) {
            throw new NotFoundException(`Workflow transaction step ${workflowTransactionStepId} is already delegated`);
        }

        const users =  await this.dataSource
            .createQueryBuilder(User, 'u')
            .select([
                'u.id',
                'u.firstname',
                'u.lastname',
                'u.username',
                'u.email',
                's.name'
            ])
            // .addSelect('s.name as site')
            .addSelect("CONCAT_WS(' ', u.firstname, u.lastname)", "fullname")
            .innerJoin('u.site', 's')
            .innerJoin('s.area', 'a')
            .where(qb => {
                return `EXISTS (
                SELECT 1 FROM user_has_roles uhr
                JOIN roles r ON r.id = uhr.role_id
                WHERE uhr.user_id = u.id
                AND uhr.deleted_at IS NULL
                AND r.code = 'APPROVER'
                )`;
            })
            .andWhere(`a.id = (
                SELECT s2.area_id FROM workflow_transactions wt
                JOIN sites s2 ON s2.id = wt.site_id
                WHERE wt.id = :workflowId
            )`, { workflowId: transactionStep.workflowStepId })
            .andWhere("u.id != :excludedId", { excludedId: transactionStep.userId })
            .getMany();
        return users;
    }

    async delegate(workflowTransactionStepId: number, delegateUserId: number, user: JwtPayload) {
        const transactionStep = await this.dataSource.getRepository(WorkflowTransactionStep)
            .createQueryBuilder('wts')
            .where('wts.id = :workflowTransactionStepId', { workflowTransactionStepId })
            .getOne();

        if (!transactionStep) {
            throw new NotFoundException(`Workflow transaction step ${workflowTransactionStepId} not found`);
        }

        transactionStep.delegationUserId = delegateUserId;
        transactionStep.updatedAt = new Date();
        transactionStep.updatedBy = user.sub;

        return this.dataSource.getRepository(WorkflowTransactionStep).save(transactionStep);
    }
}

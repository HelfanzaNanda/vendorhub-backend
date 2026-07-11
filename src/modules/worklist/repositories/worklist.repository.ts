import { Injectable } from '@nestjs/common';
import { DataSource, SelectQueryBuilder, Brackets } from 'typeorm';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
import { User } from '@modules/uman/user/entities/user.entity';

import { Role } from '@modules/uman/role/entities/role.entity';
import { RoleEnum } from '@common/enums/role.enum';
import { formatQuery } from 'src/utils/query.util';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';

@Injectable()
export class WorklistRepository {
    constructor(private readonly dataSource: DataSource) {}

    private getBaseQuery(): SelectQueryBuilder<WorkflowTransaction> {
        return this.dataSource
            .createQueryBuilder(WorkflowTransaction, 'wt')
            .leftJoin('wt.workflow', 'mw')
            .leftJoin('wt.area', 'a')
            .leftJoin('wt.requester', 'req')
            .leftJoin('wt.currentTransactionStep', 'wts')
            .leftJoin('wts.workflowStep', 'wtsws')
            .select([
                'wt.id',
                'wt.status',
                'wt.submittedAt',
                'wt.vendorTempId',
                'wt.createdAt',
                'mw.code',
                'mw.name',
                'mw.slaDuration',
                'mw.slaUnit',
                'wts.assignedAt',
                'wtsws.slaDuration',
                'wtsws.slaUnit',
                'wtsws.code',
                'a.name',
                'req.id',
                'req.firstname',
                'req.lastname',
                'wts.id',
                'wts.dueAt',
                'wts.status',
                'wts.userId',
                'wts.delegationUserId',

            ]);
    }

    findNeedMyReview(user: JwtPayload, workflowCode?: string): SelectQueryBuilder<WorkflowTransaction> {
        const qb = this.getBaseQuery();
        
        if (user.defaultRoleId == RoleEnum.APPROVER) {
            
        }else{
            qb.andWhere('wt.areaId = :areaId', { areaId: user.internalAreaId})
                .andWhere('wts.status = :status', { status: 'PENDING'});
        }

        // qb.leftJoin('currentWts.user', 'assigneeUser')
        //     .andWhere(new Brackets(qb => {
        //         qb.where('currentWts.assignmentType = :typeUser AND currentWts.approverId = :userId', { typeUser: 'USER', userId: user.id })
        //           .orWhere(`currentWts.assignmentType = :typeRole AND currentWts.roleId = :roleId AND (currentWts.areaId IS NULL OR FIND_IN_SET(currentWts.areaId, :areaIds) > 0)`, { typeRole: 'ROLE', roleId: user.defaultRoleId, areaIds: (user.areaIds && user.areaIds.length > 0 ? user.areaIds.join(',') : '0') });
        //     }));
            
        if (workflowCode) {
            qb.andWhere('mw.code = :workflowCode', { workflowCode });
        }
        return qb;
    }

    findInProgress(user: JwtPayload, workflowCode?: string): SelectQueryBuilder<WorkflowTransaction> {
        const qb = this.getBaseQuery()
            .where('wt.status = :status', { status: 'IN_PROGRESS' });
            
        if (workflowCode) {
            qb.andWhere('mw.code = :workflowCode', { workflowCode });
        }
        return qb;
    }

    findCompleted(user: JwtPayload, workflowCode?: string): SelectQueryBuilder<WorkflowTransaction> {
        const qb = this.getBaseQuery()
            .where('wt.status = :status', { status: 'COMPLETED' });
            
        if (workflowCode) {
            qb.andWhere('mw.code = :workflowCode', { workflowCode });
        }
        return qb;
    }

    findRejected(user: JwtPayload, workflowCode?: string): SelectQueryBuilder<WorkflowTransaction> {
        const qb = this.getBaseQuery()
            .where('wt.status = :status', { status: 'REJECTED' }); // Or CANCELLED based on enum
            
        if (workflowCode) {
            qb.andWhere('mw.code = :workflowCode', { workflowCode });
        }
        return qb;
    }

    findOverSla(user: JwtPayload, workflowCode?: string): SelectQueryBuilder<WorkflowTransaction> {
        const qb = this.getBaseQuery()
            .andWhere('wts.status = :wtsStatus', { wtsStatus: 'PENDING' })
            .andWhere('wts.dueAt < :now', { now: new Date() });
            
        if (workflowCode) {
            qb.andWhere('mw.code = :workflowCode', { workflowCode });
        }
        return qb;
    }

    async findSummary(user: JwtPayload, workflowCode?: string) {
        // const [needMyReview, inProgress, completed, rejected, overSla] = await Promise.all([
        //     this.findNeedMyReview(user, workflowCode).getCount(),
        //     this.findInProgress(user, workflowCode).getCount(),
        //     this.findCompleted(user, workflowCode).getCount(),
        //     this.findRejected(user, workflowCode).getCount(),
        //     this.findOverSla(user, workflowCode).getCount(),
        // ]);

        const [needMyReview, inProgress, completed, rejected, overSla = 0] = await Promise.all([
            this.findNeedMyReview(user, workflowCode).getCount(),
            this.findInProgress(user, workflowCode).getCount(),
            this.findCompleted(user, workflowCode).getCount(),
            this.findRejected(user, workflowCode).getCount(),
        ]);

        return {
            needMyReview,
            inProgress,
            completed,
            rejected,
            overSla,
        };
    }

    findDetail(workflowTransactionId: number): SelectQueryBuilder<WorkflowTransaction> {
        return this.getBaseQuery()
            .leftJoin('wts.user', 'assigneeUser')
            .addSelect(['assigneeUser.id', 'assigneeUser.firstname', 'assigneeUser.lastname'])
            .where('wt.id = :id', { id: workflowTransactionId });
    }

    async findHistory(workflowTransactionId: number) {
        return this.dataSource.getRepository(WorkflowHistory)
            .createQueryBuilder('wh')
            .leftJoin('wh.workflowStep', 'mws')
            .leftJoin('wh.actor', 'actor')
            .select([
                'wh.id',
                'wh.action',
                'wh.status',
                'wh.remarks',
                'wh.createdAt',
                'mws.sequence',
                'mws.name',
                'actor.firstname',
                'actor.lastname'
            ])
            .where('wh.workflowTransactionId = :id', { id: workflowTransactionId })
            .orderBy('wh.createdAt', 'ASC')
            .getMany();
    }
}

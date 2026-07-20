import { Injectable } from '@nestjs/common';
import { DataSource, SelectQueryBuilder, Brackets } from 'typeorm';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { RoleEnum } from '@common/enums/role.enum';
import { formatQuery } from 'src/utils/query.util';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { WorkflowStepCode } from '@common/enums/workflow.enum';
import { User } from '../entities/user.entity';
import { UserType } from '@common/enums/user.enum';

@Injectable()
export class UserRepository {
    constructor(
        private readonly dataSource: DataSource,
    ) {}

    async findInternalByEmail(email: string): Promise<User | null> {
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.email = :email', { email })
            .andWhere('u.deletedAt IS NULL')
            .andWhere('u.type = :type', { type: UserType.INTERNAL })
            .getOne();
    }

    async findExternalByEmail(email: string): Promise<User | null> {
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.email = :email', { email })
            .andWhere('u.deletedAt IS NULL')
            .andWhere('u.type = :type', { type: UserType.EXTERNAL })
            .getOne();
    }
}

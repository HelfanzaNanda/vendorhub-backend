import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { DelegationRepository } from './delegation.repository';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';

@Injectable()
export class DelegationService {
    constructor(
        private readonly delegationRepository: DelegationRepository, 
    ) {}

    async getDelegationUsers(workflowTransactionStepId: number) {
        return this.delegationRepository.getDelegateUsers(workflowTransactionStepId);
    }

    async delegate(workflowTransactionStepId: number, delegateUserId: number, user: JwtPayload) {
        return this.delegationRepository.delegate(workflowTransactionStepId, delegateUserId, user);
    }
}

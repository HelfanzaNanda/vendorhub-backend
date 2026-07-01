import { BankBranchResponseDto } from "../dto/response-bank-branch.dto";
import { BankBranch } from "../entities/bank-branch.entity";

export class BankBranchMapper {
    static toResponse(entity: BankBranch): BankBranchResponseDto {
        return {
            id: entity.id,
            code: entity.code,
            name: entity.name,
            address: entity.address,
            bank: entity.bank ? { id: entity.bank.id, name: entity.bank.name } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: BankBranch[]): BankBranchResponseDto[] {
        return entities.map(this.toResponse);
    }
}

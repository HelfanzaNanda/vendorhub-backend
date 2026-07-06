import { VendorBankTempResponseDto } from '../dto/response-vendor-bank-temp.dto';
import { VendorBankTemp } from '../entities/vendor-bank-temp.entity';

export class VendorBankTempMapper {
    static toResponse(entity: VendorBankTemp): VendorBankTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorBankId: entity.vendorBankId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            bankBranchId: entity.bankBranchId ?? null,
            bankBranch: entity.bankBranch ? { 
                id: entity.bankBranch.id, 
                name: entity.bankBranch.name,
                bank: entity.bankBranch.bank ? {
                    id: entity.bankBranch.bank.id,
                    name: entity.bankBranch.bank.name,
                    // Note: master might not load country if bank wasn't joined there. 
                    // To be safe, use optional chaining for country.
                    country: entity.bankBranch.bank.country ? {
                        id: entity.bankBranch.bank.country.id,
                        name: entity.bankBranch.bank.country.name
                    } : undefined
                } : undefined
            } : null,
            currencyId: entity.currencyId ?? null,
            currency: entity.currency ? { id: entity.currency.id, name: entity.currency.name } : null,
            accountName: entity.accountName ?? null,
            accountNumber: entity.accountNumber ?? null,
            fileId: entity.fileId ?? null,
            file: entity.file ? { id: entity.file.id, name: entity.file.originalFileName } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorBankTemp[],
    ): VendorBankTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}

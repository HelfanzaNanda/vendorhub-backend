import { VendorBankTempResponseDto } from "../dto/response-vendor-bank-temp.dto";
import { VendorBankTemp } from "../entities/vendor-bank-temp.entity";

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
            currencyId: entity.currencyId ?? null,
            accountName: entity.accountName ?? null,
            accountNumber: entity.accountNumber ?? null,
            fileId: entity.fileId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: VendorBankTemp[]): VendorBankTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}

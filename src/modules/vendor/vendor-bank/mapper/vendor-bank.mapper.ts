import { VendorBankResponseDto } from "../dto/response-vendor-bank.dto";
import { VendorBank } from "../entities/vendor-bank.entity";

export class VendorBankMapper {
    static toResponse(entity: VendorBank): VendorBankResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
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

    static toResponses(entities: VendorBank[]): VendorBankResponseDto[] {
        return entities.map(this.toResponse);
    }
}

import { VendorBankTempPaginationDto, VendorBankTempResponseDto,  } from '../dto/response-vendor-bank-temp.dto';
import { VendorBankTemp } from '../entities/vendor-bank-temp.entity';

export class VendorBankTempMapper {
    static pagination(entity: VendorBankTemp): VendorBankTempPaginationDto {
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
            file: entity.file ? { 
                id: entity.file.id, 
                uuid : entity.file.uuid, 
                size : entity.file.fileSize, 
                originalName: entity.file.originalFileName, 
                filename : entity.file.fileName 
            } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,    
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        }
    }

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
                    name: entity.bankBranch.name
                } : null,
                country: entity.bankBranch?.bank?.country ? {
                    id: entity.bankBranch.bank.country.id,
                    name: entity.bankBranch.bank.country.name,
                } : undefined,
                bank: entity.bankBranch?.bank ? {
                    id: entity.bankBranch.bank.id,
                    name: entity.bankBranch.bank.name,
                } : undefined,
                currencyId: entity.currencyId ?? null,
                currency: entity.currency ? { id: entity.currency.id, name: entity.currency.name } : null,
                accountName: entity.accountName ?? null,
                accountNumber: entity.accountNumber ?? null,
                fileId: entity.fileId ?? null,
                file: entity.file ? { 
                    id: entity.file.id, 
                    uuid : entity.file.uuid,
                    size : entity.file.fileSize, 
                    originalName: entity.file.originalFileName,
                    filename : entity.file.fileName
                } : null,
                audit: {
                    createdAt: entity.createdAt,
                    updatedAt: entity.updatedAt,
                    createdBy: entity.createdByUser?.username ?? null,
                    updatedBy: entity.updatedByUser?.username ?? null,
                },
            };
        }
}

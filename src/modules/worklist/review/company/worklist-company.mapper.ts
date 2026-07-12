import { VendorCompanyTemp } from "@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity";
import { VendorCompany } from "@modules/vendor/vendor-company/entities/vendor-company.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistCompanyMapper {
    static toResponse(temp: VendorCompanyTemp): WorklistGenericResponse[] {
        const current = temp?.vendorCompany;
        
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE' = 'NO_CHANGE';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorCompany;
            delete data.vendorTemp;
        }

        let originalData: any = current || null;

        if (!current && temp) {
            action = 'CREATE';
            originalData = null;
        } else if (current && !temp) {
            action = 'DELETE';
            data = null;
        } else {
            // Compare fields to determine if it's an UPDATE or NO_CHANGE
            // (You could do a deep comparison here or just assume UPDATE if action was saved as UPDATE, but the previous code compared specific fields)
            const changed = this.hasChanges(current, temp);
            action = changed ? 'UPDATE' : 'NO_CHANGE';
        }

        return [
            {
                id: temp?.id,
                action,
                reviewStatus: temp?.reviewStatus || null,
                reviewRemark: temp?.reviewNotes || null,
                data,
                originalData,
            }
        ];
    }

    private static hasChanges(before: VendorCompany | undefined, after: VendorCompanyTemp): boolean {
        if (before?.companyName !== after?.companyName) return true;
        if (before?.site?.id !== after?.site?.id) return true;
        if (before?.businessType?.id !== after?.businessType?.id) return true;
        if (before?.country?.id !== after?.country?.id) return true;
        if (before?.province?.id !== after?.province?.id) return true;
        if (before?.city?.id !== after?.city?.id) return true;
        if (before?.address !== after?.address) return true;
        if (before?.postalCode !== after?.postalCode) return true;
        if (before?.website !== after?.website) return true;
        return false;
    }
}
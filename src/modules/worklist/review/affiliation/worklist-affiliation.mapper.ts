import { VendorAffiliationTemp } from "@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity";
import { VendorAffiliation } from "@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistAffiliationMapper {
    static toResponse(temps: VendorAffiliationTemp[]): WorklistGenericResponse[] {
        return temps.map(temp => this.mapSingle(temp));
    }

    private static mapSingle(temp: VendorAffiliationTemp): WorklistGenericResponse {
        const current = temp?.vendorAffiliation;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE' = 'NO_CHANGE';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorAffiliation;
            delete data.vendorTemp;
        }

        let originalData: any = current || null;

        if (!current && temp) {
            action = 'CREATE';
            originalData = null;
        } else if (current && (!temp || temp.action === 'DELETE' || temp.action === 'delete')) {
            action = 'DELETE';
            data = null;
        } else {
            // Simplified action determination, frontend does detailed diff
            action = (temp?.action && temp.action.toUpperCase() !== 'DELETE') ? (temp.action.toUpperCase() as any) : 'UPDATE';
            // Default to UPDATE if we don't have a reliable indicator, FE will resolve NO_CHANGE if deep equal
        }

        return {
            id: temp?.id,
            action,
            reviewStatus: temp?.reviewStatus || null,
            reviewRemark: temp?.reviewNotes || null,
            data,
            originalData,
        };
    }
}

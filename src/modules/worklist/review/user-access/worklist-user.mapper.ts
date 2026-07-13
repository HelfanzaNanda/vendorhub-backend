import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { VendorUserTemp } from "@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity";
import { VendorPersonnel } from "@modules/vendor/vendor-personnel/entities/vendor-personnel.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistUserMapper {
    static toResponse(temps: VendorUserTemp[]): WorklistGenericResponse[] {
        return temps.map(temp => this.mapSingle(temp));
    }

    private static mapSingle(temp: VendorUserTemp): WorklistGenericResponse {
        const current = temp?.vendorUser;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE' = 'NO_CHANGE';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorUser;
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

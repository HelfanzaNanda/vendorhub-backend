import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorPersonnelTemp } from "@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity";
import { VendorPersonnel } from "@modules/vendor/vendor-personnel/entities/vendor-personnel.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistPersonnelMapper {
    static toResponse(temps: VendorPersonnelTemp[]): WorklistGenericResponse[] {
        return temps.map(temp => this.mapSingle(temp));
    }

    private static mapSingle(temp: VendorPersonnelTemp): WorklistGenericResponse {
        const current = temp?.vendorPersonnel;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_ACTION' = 'NO_ACTION';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorPersonnel;
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
            // Default to UPDATE if we don't have a reliable indicator, FE will resolve NO_ACTION if deep equal
        }

        return {
            id: temp?.id,
            action,
            reviewStatus: temp?.reviewStatus || null,
            reviewRemark: temp?.reviewNotes || null,
            data,
            originalData,
            permissions: ReviewHelper.getPermissions(action),
        };
    }
}

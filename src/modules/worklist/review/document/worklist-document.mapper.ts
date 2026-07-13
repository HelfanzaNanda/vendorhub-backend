import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorDocumentTemp } from "@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity";
import { VendorDocument } from "@modules/vendor/vendor-document/entities/vendor-document.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistDocumentMapper {
    static toResponse(temp: VendorDocumentTemp): WorklistGenericResponse[] {
        if (!temp) return [];
        return [this.mapSingle(temp)];
    }

    private static mapSingle(temp: VendorDocumentTemp): WorklistGenericResponse {
        const current = temp?.vendorDocument;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_ACTION' = 'NO_ACTION';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorDocument;
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

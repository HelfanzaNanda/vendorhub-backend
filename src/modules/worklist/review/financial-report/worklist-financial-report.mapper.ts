import { VendorFinancialReportTemp } from "@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity";
import { VendorFinancialReport } from "@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistFinancialReportMapper {
    static toResponse(temp: VendorFinancialReportTemp): WorklistGenericResponse[] {
        return [this.mapSingle(temp)];
    }

    private static mapSingle(temp: VendorFinancialReportTemp): WorklistGenericResponse {
        const current = temp?.vendorFinancialReport;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE' = 'NO_CHANGE';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorFinancialReport;
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

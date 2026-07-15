import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorCompetencyTemp } from "@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity";
import { VendorCompetency } from "@modules/vendor/vendor-competency/entities/vendor-competency.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class WorklistCompetencyMapper {
    static toResponse(temps: VendorCompetencyTemp[]): WorklistGenericResponse[] {
        return temps.map(temp => this.compareCompetency(temp));
    }

    private static compareCompetency(temp: VendorCompetencyTemp): WorklistGenericResponse {
        const current = temp?.vendorCompetency;
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_ACTION' = 'NO_ACTION';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.vendorCompetency;
            delete data.vendorTemp;
            delete data.customerReferences;
        }

        let originalData: any = null;
        if (current) {
            originalData = { ...current };
            delete originalData.customerReferences;
        }

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

        const customerReferences = this.compareCustomerReferences(
            temp?.customerReferences || [],
            current?.customerReferences || []
        );
        
        const subCategoryItem = temp?.subCategoryItem || current?.subCategoryItem || null;
        
        if (data) {
            data['subCategoryItem'] = subCategoryItem;
        }
        if (originalData) {
            originalData['subCategoryItem'] = subCategoryItem;
        }
        
        return {
            id: temp?.id || current?.id,
            action,
            reviewStatus: temp?.reviewStatus || null,
            reviewRemark: temp?.reviewNotes || null,
            originalData,
            data,
            customerReferences,
            permissions: ReviewHelper.getPermissions(action),
        } as any;
    }

    private static compareCustomerReferences(temps: any[], masters: any[]) {
        const result: any[] = [];
        
        const masterMap = new Map<number, any>();
        if (masters) {
            for (const m of masters) {
                masterMap.set(m.id, m);
            }
        }

        if (temps) {
            for (const temp of temps) {
                let action = 'NO_CHANGE';
                const current = temp.vendorCustomerReferenceId ? masterMap.get(temp.vendorCustomerReferenceId) : null;

                if (!temp.vendorCustomerReferenceId) {
                    action = 'CREATE';
                } else if (temp.action === 'DELETE' || temp.action === 'delete') {
                    action = 'DELETE';
                } else {
                    action = (temp.action && temp.action.toUpperCase() !== 'DELETE') ? temp.action.toUpperCase() : 'UPDATE';
                }

                if (current) {
                    masterMap.delete(current.id);
                }

                result.push(this.buildCustomerReferenceDiff(action, temp, current));
            }
        }

        for (const [id, m] of masterMap.entries()) {
            result.push(this.buildCustomerReferenceDiff('NO_CHANGE', null, m));
        }

        return result;
    }

    private static buildCustomerReferenceDiff(action: string, temp: any, master: any) {
        let originalData = null;
        let data = null;

        if (action === 'CREATE') {
            originalData = null;
            data = this.cleanCustomerReferenceData(temp);
        } else if (action === 'UPDATE') {
            originalData = this.cleanCustomerReferenceData(master);
            data = this.cleanCustomerReferenceData(temp);
        } else if (action === 'DELETE') {
            originalData = this.cleanCustomerReferenceData(master);
            data = null;
        } else if (action === 'NO_CHANGE') {
            originalData = this.cleanCustomerReferenceData(master);
            data = this.cleanCustomerReferenceData(master);
        }

        return {
            id: temp?.id || master?.id || null,
            action,
            originalData,
            data
        };
    }

    private static cleanCustomerReferenceData(source: any) {
        if (!source) return null;
        return {
            id: source.id,
            name: source.name,
            description: source.description,
            projectValue: source.projectValue,
            year: source.year,
            file: source.file,
            areaIds: source.areaIds,
        };
    }
}

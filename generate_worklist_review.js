const fs = require('fs');
const path = require('path');

const sections = [
  { name: 'personnel', className: 'Personnel', entity: 'VendorPersonnel', isMultiple: true, filePrefix: 'personnel', rel1: 'vendorTemp', rel2: 'vendorPersonnel' },
  { name: 'bank', className: 'Bank', entity: 'VendorBank', isMultiple: true, filePrefix: 'bank', rel1: 'vendorTemp', rel2: 'vendorBank' },
  { name: 'affiliation', className: 'Affiliation', entity: 'VendorAffiliation', isMultiple: true, filePrefix: 'affiliation', rel1: 'vendorTemp', rel2: 'vendorAffiliation' },
  { name: 'business-license', className: 'BusinessLicense', entity: 'VendorBusinessLicense', isMultiple: false, filePrefix: 'business-license', rel1: 'vendorTemp', rel2: 'vendorBusinessLicense' },
  { name: 'competency', className: 'Competency', entity: 'VendorCompetency', isMultiple: true, filePrefix: 'competency', rel1: 'vendorTemp', rel2: 'vendorCompetency' },
  { name: 'document', className: 'Document', entity: 'VendorDocument', isMultiple: false, filePrefix: 'document', rel1: 'vendorTemp', rel2: 'vendorDocument' },
  { name: 'financial-report', className: 'FinancialReport', entity: 'VendorFinancialReport', isMultiple: false, filePrefix: 'financial-report', rel1: 'vendorTemp', rel2: 'vendorFinancialReport' },
];

const baseDir = path.join(__dirname, 'src/modules/worklist/review');

sections.forEach(sec => {
  const dir = path.join(baseDir, sec.name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // MAPPER
  const mapperCode = `import { ${sec.entity}Temp } from "@modules/vendor/temporary/vendor-${sec.filePrefix}-temp/entities/vendor-${sec.filePrefix}-temp.entity";
import { ${sec.entity} } from "@modules/vendor/vendor-${sec.filePrefix}/entities/vendor-${sec.filePrefix}.entity";
import { WorklistGenericResponse } from "@modules/worklist/dto/worklist-detail.dto";

export class Worklist${sec.className}Mapper {
    static toResponse(${sec.isMultiple ? `temps: ${sec.entity}Temp[]` : `temp: ${sec.entity}Temp`}): WorklistGenericResponse[] {
        ${sec.isMultiple ? `return temps.map(temp => this.mapSingle(temp));` : `return [this.mapSingle(temp)];`}
    }

    private static mapSingle(temp: ${sec.entity}Temp): WorklistGenericResponse {
        const current = temp?.${sec.rel2};
        let action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE' = 'NO_CHANGE';
        
        let data: any = null;
        if (temp) {
            data = { ...temp };
            delete data.${sec.rel2};
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
`;
  fs.writeFileSync(path.join(dir, `worklist-${sec.filePrefix}.mapper.ts`), mapperCode);

  // SERVICE
  const serviceCode = `import { ${sec.entity}Temp } from "@modules/vendor/temporary/vendor-${sec.filePrefix}-temp/entities/vendor-${sec.filePrefix}-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Worklist${sec.className}Mapper } from "./worklist-${sec.filePrefix}.mapper";

@Injectable()
export class Worklist${sec.className}Service {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(${sec.entity}Temp)
        private readonly tempRepository: Repository<${sec.entity}Temp>,
    ) {}

    async get(workflowTransactionId: number${sec.name === 'personnel' ? ', personnelType?: string' : ''}) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        ${sec.isMultiple ? `
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        ${sec.name === 'personnel' ? `if (personnelType) {
            // Assume personnelType filtering by code/id if needed, but let's just fetch all or filter by type relation.
            // Adjust this if personnelType is a relation or string.
            // For now just pass it to whereClause if it exists.
        }` : ''}
        const temps = await this.tempRepository.find({
            where: whereClause,
            relations: ['${sec.rel2}'],
        });
        return Worklist${sec.className}Mapper.toResponse(temps);
        ` : `
        const temp = await this.tempRepository.findOne({
            where: { vendorTempId: workflow.vendorTemp.id },
            relations: ['${sec.rel2}'],
        });

        if (!temp) {
            throw new NotFoundException(\`${sec.className} not found\`);
        }

        return Worklist${sec.className}Mapper.toResponse(temp);
        `}
    }
}
`;
  fs.writeFileSync(path.join(dir, `worklist-${sec.filePrefix}.service.ts`), serviceCode);
});
console.log("Done generating");

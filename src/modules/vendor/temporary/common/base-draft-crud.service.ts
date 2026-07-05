import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { VendorTempAction } from '@common/enums';
import { RequestContext } from '@common/context/request-context';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';

export abstract class BaseDraftCrudService<MasterEntity extends ObjectLiteral, TempEntity extends ObjectLiteral> {
    constructor(
        protected readonly masterRepo: Repository<MasterEntity>,
        protected readonly tempRepo: Repository<TempEntity>,
        protected readonly vendorTempService: VendorTempService,
    ) {}

    /**
     * The name of the foreign key column in the temp table that links to the master table.
     * e.g., 'vendorPicId' for personnel, 'vendorBankId' for bank.
     */
    protected abstract get masterIdField(): keyof TempEntity;

    /**
     * Map a master entity to a temp entity (used when copying master to temp for update/delete).
     */
    protected abstract mapMasterToTemp(master: MasterEntity, vendorTempId: number, action: VendorTempAction): Partial<TempEntity>;

    async createDraft(vendorId: number, data: Partial<TempEntity>): Promise<TempEntity> {
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        
        const temp = this.tempRepo.create({
            ...data,
            vendorTempId: vendorTemp.id,
            action: VendorTempAction.CREATE,
            [this.masterIdField]: null,
        } as any);

        return this.tempRepo.save(temp) as unknown as Promise<TempEntity>;
    }

    async updateDraft(vendorId: number, id: number, data: Partial<TempEntity>, isMaster: boolean): Promise<TempEntity> {
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);

        if (isMaster) {
            // Updating a master record: copy to temp
            const master = await this.masterRepo.findOne({ where: { id } as any });
            if (!master) throw new NotFoundException(`Master data with id ${id} not found`);

            // Check if temp already exists
            let temp = await this.tempRepo.findOne({
                where: { 
                    [this.masterIdField]: id,
                    vendorTempId: vendorTemp.id,
                } as any
            });

            if (temp) {
                // Update existing temp
                Object.assign(temp, data);
                return this.tempRepo.save(temp) as unknown as Promise<TempEntity>;
            } else {
                // Create new temp with action UPDATE
                const mapped = this.mapMasterToTemp(master, vendorTemp.id, VendorTempAction.UPDATE);
                Object.assign(mapped, data);
                return this.tempRepo.save(this.tempRepo.create(mapped as any)) as unknown as Promise<TempEntity>;
            }
        } else {
            // Updating a temp record
            const temp = await this.tempRepo.findOne({ where: { id } as any });
            if (!temp) throw new NotFoundException(`Temp data with id ${id} not found`);

            Object.assign(temp, data);
            // Action remains unchanged (either CREATE or UPDATE)
            return this.tempRepo.save(temp) as unknown as Promise<TempEntity>;
        }
    }

    async deleteDraft(vendorId: number, id: number, isMaster: boolean): Promise<any> {
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);

        if (isMaster) {
            const master = await this.masterRepo.findOne({ where: { id } as any });
            if (!master) throw new NotFoundException(`Master data with id ${id} not found`);

            let temp = await this.tempRepo.findOne({
                where: { 
                    [this.masterIdField]: id,
                    vendorTempId: vendorTemp.id,
                } as any
            });

            if (temp) {
                // If temp already exists, change its action to DELETE
                (temp as any).action = VendorTempAction.DELETE;
                return this.tempRepo.save(temp);
            } else {
                // Create new temp with action DELETE
                const mapped = this.mapMasterToTemp(master, vendorTemp.id, VendorTempAction.DELETE);
                return this.tempRepo.save(this.tempRepo.create(mapped as any));
            }
        } else {
            // Deleting a temp record
            const temp = await this.tempRepo.findOne({ where: { id } as any });
            if (!temp) throw new NotFoundException(`Temp data with id ${id} not found`);

            if ((temp as any).action === VendorTempAction.CREATE) {
                // Hard delete if it was a CREATE action (never existed in master)
                return this.tempRepo.remove(temp);
            } else {
                // Change action to DELETE
                (temp as any).action = VendorTempAction.DELETE;
                return this.tempRepo.save(temp);
            }
        }
    }

    async getMergedPagination(
        vendorId: number,
        query: any,
        masterQb: SelectQueryBuilder<MasterEntity>,
        tempQb: SelectQueryBuilder<TempEntity>,
        mapToResponse: (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => any,
        sortBy: string = 'createdAt',
        sortDir: 'asc' | 'desc' = 'desc'
    ) {
        // Fetch all master and temp data for this vendor
        const masters = await masterQb.getMany();
        const temps = await tempQb.getMany();

        const mergedMap = new Map<number | string, any>();

        // 1. Add all master items to map (key = master.id)
        for (const master of masters) {
            mergedMap.set(`master_${(master as any).id}`, mapToResponse(master, 'MASTER', null));
        }

        // 2. Process temp items, overriding master if exists
        for (const temp of temps) {
            const masterId = (temp as any)[this.masterIdField];
            if (masterId) {
                // If it's an UPDATE or DELETE, it targets a master record
                if ((temp as any).action === VendorTempAction.DELETE) {
                    // Remove from merged map so it's not visible
                    mergedMap.delete(`master_${masterId}`);
                } else {
                    // Overwrite master with temp data
                    mergedMap.set(`master_${masterId}`, mapToResponse(temp, 'TEMP', (temp as any).action));
                }
            } else {
                // If it's a CREATE, it has no master record
                if ((temp as any).action !== VendorTempAction.DELETE) {
                    mergedMap.set(`temp_${(temp as any).id}`, mapToResponse(temp, 'TEMP', (temp as any).action));
                }
            }
        }

        // 3. Convert map to array
        let mergedList = Array.from(mergedMap.values());

        // 4. Sort in memory (simplistic sorting)
        if (sortBy) {
            mergedList.sort((a, b) => {
                const valA = a[sortBy];
                const valB = b[sortBy];
                if (valA < valB) return sortDir === 'asc' ? -1 : 1;
                if (valA > valB) return sortDir === 'asc' ? 1 : -1;
                return 0;
            });
        }

        // 5. Paginate in memory
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const total = mergedList.length;
        
        const start = (page - 1) * limit;
        const end = start + limit;
        const data = mergedList.slice(start, end);

        return {
            data,
            meta: {
                page,
                limit,
                total,
                totalPage: Math.ceil(total / limit),
                sortBy,
                sortDir,
                search: query.search,
            },
        };
    }
}

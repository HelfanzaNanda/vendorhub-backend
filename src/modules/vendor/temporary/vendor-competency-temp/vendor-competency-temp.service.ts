import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorCompetencyTempDto } from './dto/create-vendor-competency-temp.dto';
import { UpdateVendorCompetencyTempDto } from './dto/update-vendor-competency-temp.dto';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { VendorCompetencyTemp } from './entities/vendor-competency-temp.entity';
import { VendorCustomerReferenceTemp } from './entities/vendor-customer-reference-temp.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VendorCompetencyTempMapper } from './mapper/vendor-competency-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';
import { CreateVendorCustomerReferenceTempDto } from './dto/create-vendor-customer-reference-temp.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class VendorCompetencyTempService extends BaseDraftCrudService<VendorCompetency, VendorCompetencyTemp> {
    constructor(
        @InjectRepository(VendorCompetency) masterRepo: Repository<VendorCompetency>,
        @InjectRepository(VendorCompetencyTemp) tempRepo: Repository<VendorCompetencyTemp>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorCompetencyTemp = 'vendorCompetencyId';

    protected mapMasterToTemp(master: VendorCompetency, vendorTempId: number, action: VendorTempAction): Partial<VendorCompetencyTemp> {
        return {
            vendorTempId,
            vendorCompetencyId: master.id,
            action,
            subCategoryItemId: master.subCategoryItemId,
        };
    }

    async create(vendorId: number, data: CreateVendorCompetencyTempDto) {
        if (data.customerReferences?.length === 0) {
            throw new NotFoundException('Customer references is required');
        }

        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);

        const { customerReferences, ...competencyData } = data;


        return this.tempRepo.manager.transaction(async (manager) => {
            const temp = manager.create(VendorCompetencyTemp, {
                ...competencyData,
                vendorTempId: vendorTemp.id,
                action: VendorTempAction.CREATE,
                vendorCompetencyId: null,
            } as any);

            const savedTemp = await manager.save(temp);

            await this.processCustomerReferences(savedTemp.id, customerReferences, manager);

            return savedTemp;
        });
    }

    async update(vendorId: number, id: number, data: UpdateVendorCompetencyTempDto, isMaster: boolean) {
        if (data.customerReferences?.length === 0) {
            throw new NotFoundException('Customer references is required');
        }
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        const { source, customerReferences, ...updateData } = data;

        return this.tempRepo.manager.transaction(async (manager) => {
            let savedTemp: VendorCompetencyTemp;

            if (isMaster) {
                const master = await manager.findOne(VendorCompetency, { where: { id } as any });
                if (!master) throw new NotFoundException(`Master data with id ${id} not found`);

                let temp = await manager.findOne(VendorCompetencyTemp, {
                    where: { 
                        vendorCompetencyId: id,
                        vendorTempId: vendorTemp.id,
                    } as any
                });

                if (temp) {
                    Object.assign(temp, updateData);
                    savedTemp = await manager.save(temp);
                } else {
                    const mapped = this.mapMasterToTemp(master, vendorTemp.id, VendorTempAction.UPDATE);
                    Object.assign(mapped, updateData);
                    savedTemp = await manager.save(manager.create(VendorCompetencyTemp, mapped as any));
                }
            } else {
                const temp = await manager.findOne(VendorCompetencyTemp, { where: { id } as any });
                if (!temp) throw new NotFoundException(`Temp data with id ${id} not found`);

                Object.assign(temp, updateData);
                savedTemp = await manager.save(temp);
            }

            await this.processCustomerReferences(savedTemp.id, customerReferences, manager);

            return savedTemp;
        });
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        return this.deleteDraft(vendorId, id, isMaster);
    }

    private async processCustomerReferences(vendorCompetencyTempId: number, customerReferences: CreateVendorCustomerReferenceTempDto[] | undefined, manager: EntityManager) {
        const existingTemps = await manager.find(VendorCustomerReferenceTemp, {
            where: { vendorCompetencyTempId }
        });

        const incomingRefs = customerReferences || [];
        const processedTempIds = new Set<number>();

        for (const incoming of incomingRefs) {
            const areaIdsString = incoming.areaIds?.join(',');
            const fileId = incoming.fileId;


            let existing : VendorCustomerReferenceTemp | undefined = undefined;

            console.log('incoming.id', incoming.id);
            console.log('isUUID(incoming.id)', isUUID(incoming.id));
            

            if (!isUUID(incoming.id)) {
                existing = existingTemps.find(t => 
                    (typeof incoming.id === 'number' && t.id === incoming.id) ||
                    (typeof incoming.vendorCustomerReferenceId === 'number' && t.vendorCustomerReferenceId === incoming.vendorCustomerReferenceId)
                );    
            }


            if (existing) {
                existing.name = incoming.name;
                existing.description = incoming.description;
                existing.projectValue = incoming.projectValue;
                existing.year = incoming.year;
                existing.fileId = fileId;
                existing.areaIds = areaIdsString;
                
                if (existing.action === VendorTempAction.DELETE) {
                    existing.action = VendorTempAction.UPDATE;
                }
                
                await manager.save(existing);
                processedTempIds.add(existing.id);
            } else {
                const newTemp = manager.create(VendorCustomerReferenceTemp, {
                    vendorCompetencyTempId,
                    name: incoming.name,
                    description: incoming.description,
                    projectValue: incoming.projectValue,
                    year: incoming.year,
                    fileId: fileId,
                    areaIds: areaIdsString,
                    action: VendorTempAction.CREATE,
                });
                const saved = await manager.save(newTemp);
                processedTempIds.add(saved.id);
            }
        }

        for (const existing of existingTemps) {
            if (!processedTempIds.has(existing.id)) {
                if (existing.action === VendorTempAction.CREATE) {
                    await manager.remove(existing);
                } else {
                    existing.action = VendorTempAction.DELETE;
                    await manager.save(existing);
                }
            }
        }
    }

    async pagination(vendorId: number, query: PaginationQueryDto) {
        const masterQb = this.masterRepo.createQueryBuilder('m')
            .where('m.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('m.createdByUser', 'createdByUser')
            .leftJoinAndSelect('m.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('m.subCategoryItem', 'subCategoryItem')
            .leftJoinAndSelect('subCategoryItem.competencySubCategory', 'subCategory')
            .leftJoinAndSelect('subCategory.competencyCategory', 'category')
            .leftJoinAndSelect('m.customerReferences', 'customerReferences');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorCompetency', 'vendorCompetency')
            .leftJoinAndSelect('t.subCategoryItem', 'subCategoryItem')
            .leftJoinAndSelect('subCategoryItem.competencySubCategory', 'subCategory')
            .leftJoinAndSelect('subCategory.competencyCategory', 'category')
            .leftJoinAndSelect('t.customerReferences', 'customerReferences')
            .leftJoinAndSelect('customerReferences.file', 'customerReferenceFile');

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorCompetencyId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorCompetencyTempMapper.toResponse(entity) 
                : VendorCompetencyTempMapper.toResponse({ ...entity, vendorCompetencyId: entity.id } as any);
            
            return {
                ...res,
                id,
                masterId,
                tempId,
                source,
                action: source === 'MASTER' ? null : action
            };
        };

        return this.getMergedPagination(
            vendorId, 
            query, 
            masterQb, 
            tempQb, 
            mapToResponse
        );
    }

    async findOne(vendorId: number, id: number, isMaster: boolean) {
        if (isMaster) {
            const item = await this.masterRepo.findOne({
                where: { id, vendorId } as any,
                relations: [
                    'createdByUser', 
                    'updatedByUser', 
                    'subCategoryItem', 
                    'subCategoryItem.competencySubCategory', 
                    'subCategoryItem.competencySubCategory.competencyCategory',
                    'customerReferences',
                    'customerReferences.file'
                ],
            });
            if (!item) throw new NotFoundException();
            const res = VendorCompetencyTempMapper.toResponse({ ...item, vendorCompetencyId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: [
                    'createdByUser', 
                    'updatedByUser', 
                    'subCategoryItem', 
                    'subCategoryItem.competencySubCategory', 
                    'subCategoryItem.competencySubCategory.competencyCategory',
                    'customerReferences',
                    'customerReferences.file'
                ],
            });
            if (!item) throw new NotFoundException();
            const res = VendorCompetencyTempMapper.toResponse(item);
            
            const masterId = item.vendorCompetencyId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}

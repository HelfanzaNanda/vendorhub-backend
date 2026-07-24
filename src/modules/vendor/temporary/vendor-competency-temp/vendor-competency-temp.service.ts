import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorCompetencyTempDto } from './dto/create-vendor-competency-temp.dto';
import { UpdateVendorCompetencyTempDto } from './dto/update-vendor-competency-temp.dto';
import { EntityManager, In, Not, Repository, SelectQueryBuilder } from 'typeorm';
import { VendorCompetencyTemp } from './entities/vendor-competency-temp.entity';
import { VendorCustomerReferenceTemp } from './entities/vendor-customer-reference-temp.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VendorCompetencyTempMapper } from './mapper/vendor-competency-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { DataSource, VendorTempAction } from '@common/enums';
import { CreateVendorCustomerReferenceTempDto, DeleteVendorCustomerReferenceTempDto } from './dto/create-vendor-customer-reference-temp.dto';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
import { Area } from '@modules/master/area/entities/area.entity';

@Injectable()
export class VendorCompetencyTempService extends BaseDraftCrudService<VendorCompetency, VendorCompetencyTemp> {
    constructor(
        @InjectRepository(VendorCompetency) masterRepo: Repository<VendorCompetency>,
        @InjectRepository(VendorCompetencyTemp) tempRepo: Repository<VendorCompetencyTemp>,
        vendorTempService: VendorTempService,
        @InjectRepository(Area) private areaRepo: Repository<Area>,

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

            await this.createCustomers(manager, savedTemp.id, customerReferences ?? []);

            return savedTemp;
        });
    }

    private async createCustomers(manager : EntityManager, vendorCompetencyTempId : number, customers: CreateVendorCustomerReferenceTempDto[]) {
        const items : VendorCustomerReferenceTemp[] = [];
        for (const incoming of customers) {
            const newTemp = manager.create(VendorCustomerReferenceTemp, {
                vendorCompetencyTempId,
                name : incoming.name,
                description: incoming.description,
                projectValue : incoming.projectValue,
                year : incoming.year,
                fileId: incoming.fileId,    
                areaIds : incoming.areaIds?.join(','),
                action: VendorTempAction.CREATE,
            });

            items.push(newTemp);
        }
        await manager.save(items);
    }


    async update(vendorId: number, id: number, data: UpdateVendorCompetencyTempDto, isMaster: boolean) {
        if (data.customerReferences?.length === 0) {
            throw new NotFoundException('Customer references is required');
        }
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        const { source, customerReferences : customers, ...updateData } = data;

        return this.tempRepo.manager.transaction(async (manager) => {
            let savedTemp: VendorCompetencyTemp;

            if (isMaster) {
                const master = await manager.findOne(VendorCompetency, {
                    where: { id },
                });

                if (!master) {
                    throw new NotFoundException(`Master data with id ${id} not found`);
                }

                let temp = await manager.findOne(VendorCompetencyTemp, {
                    where: {
                        vendorCompetencyId: id,
                        vendorTempId: vendorTemp.id,
                    },
                });

                if (!temp) {
                    const mapped = this.mapMasterToTemp(
                        master,
                        vendorTemp.id,
                        VendorTempAction.UPDATE,
                    );

                    Object.assign(mapped, updateData);

                    temp = await manager.save(
                        manager.create(VendorCompetencyTemp, mapped as any),
                    );

                    // copy seluruh child master -> temp
                    await this.copyCustomersToTemp(
                        manager,
                        master.id,
                        temp.id,
                    );
                } else {
                    Object.assign(temp, updateData);

                    temp = await manager.save(temp);
                }

                savedTemp = temp;
            } else {
                const temp = await manager.findOne(VendorCompetencyTemp, { where: { id } });

                if (!temp) {
                    throw new NotFoundException("Vendor Competency Temp not found");
                }

                Object.assign(temp, updateData);

                savedTemp = await manager.save(temp);
            }

            await this.processCustomers(savedTemp.id, isMaster ? DataSource.MASTER : DataSource.TEMP, customers, manager);

            return savedTemp;
        });
    }

    private async copyCustomersToTemp( manager: EntityManager, vendorCompetencyId: number, vendorCompetencyTempId: number, ) {
        const masters = await manager.find(VendorCustomerReference, {
            where: {
                vendorCompetencyId,
            },
        });

        if (!masters.length) {
            return;
        }

        const items = masters.map(item =>
            manager.create(VendorCustomerReferenceTemp, {
                vendorCustomerReferenceId: item.id,
                vendorCompetencyTempId,
                name : item.name,
                description: item.description,
                projectValue : item.projectValue,
                year : item.year,
                fileId: item.fileId,    
                areaIds : item.areaIds,
                action: undefined,
            }),
        );
        await manager.save(items);
    }

    private async processCustomers(vendorCompetencyTempId: number, parentSource: DataSource, customers: CreateVendorCustomerReferenceTempDto[] | undefined, manager: EntityManager) {
        if (!customers?.length) {
            return;
        }

        for (const incoming of customers ?? []) {
            switch (incoming.action) {

                case VendorTempAction.CREATE:
                    await manager.save(
                        manager.create(VendorCustomerReferenceTemp, {
                            vendorCompetencyTempId,
                            name: incoming.name,
                            description: incoming.description,
                            projectValue: incoming.projectValue,
                            year: incoming.year,
                            fileId: incoming.fileId,
                            areaIds: incoming.areaIds.join(','),
                            action: VendorTempAction.CREATE,
                        })
                    );
                    break;

                case VendorTempAction.UPDATE:
                    { 
                        if (!incoming.id) {
                            throw new BadRequestException("Error Id is required");
                        }

                        const existing = await this.findCustomer( manager, vendorCompetencyTempId, incoming.id, parentSource);

                        if (!existing) {
                            throw new BadRequestException(`Customer Reference with id ${incoming.id} not found.`);
                        }

                        existing.name = incoming.name;
                        existing.description = incoming.description;
                        existing.projectValue = incoming.projectValue;
                        existing.year = incoming.year;
                        existing.fileId = incoming.fileId;
                        existing.areaIds = incoming.areaIds.join(',');

                        if (existing.action !== VendorTempAction.CREATE) {
                            existing.action = VendorTempAction.UPDATE;
                        }

                        await manager.save(existing);
                        break; 
                    }

                case VendorTempAction.DELETE:
                    { 
                        if (!incoming.id) {
                            throw new BadRequestException("Error Id is required");
                        }

                        const existing = await this.findCustomer( manager, vendorCompetencyTempId, incoming.id, parentSource);

                        if (!existing) {
                            throw new BadRequestException(`Customer Reference with id ${incoming.id} not found.`);
                        }

                        if (existing.action === VendorTempAction.CREATE) {
                            await manager.remove(existing);
                        } else {
                            existing.action = VendorTempAction.DELETE;
                            await manager.save(existing);
                        }

                        break; 
                    }
            }

        }
    }

    private async findCustomer( manager: EntityManager, vendorCompetencyTempId: number, id: number, parentSource: DataSource, ) 
    {
        if (parentSource === DataSource.MASTER) {

            return manager.findOne(
                VendorCustomerReferenceTemp,
                {
                    where:{
                        vendorCompetencyTempId,
                        vendorCustomerReferenceId: id,
                    },
                },
            );
        }

        return manager.findOne(
            VendorCustomerReferenceTemp,
            {
                where:{
                    id,
                },
            },
        );
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        return this.tempRepo.manager.transaction(async (manager) => {
            if (isMaster) {
                const master = await manager.findOne(VendorCompetency, { where: { id } as any });
                if (!master) throw new NotFoundException(`Master data with id ${id} not found`);

                let temp = await manager.findOne(VendorCompetencyTemp, {
                    where: { 
                        vendorCompetencyId: id,
                        vendorTempId: vendorTemp.id,
                    }
                });

                if (!temp) {
                    temp = manager.create(
                        VendorCompetencyTemp,
                        this.mapMasterToTemp(
                            master,
                            vendorTemp.id,
                            VendorTempAction.DELETE,
                        ),
                    );
                }

                temp.action = VendorTempAction.DELETE;

                const savedTemp = await manager.save(temp);

                await this.processDeleteCustomers(manager, master.id, savedTemp.id);

                return savedTemp;
            }

            const temp = await manager.findOne(VendorCustomerReferenceTemp, { where: { id } as any });
            if (!temp) throw new NotFoundException(`Temp data with id ${id} not found`);

            await this.processDeleteCustomers(manager, temp.vendorCustomerReferenceId!!, temp.id);

            return await manager.remove(temp);
        });
    }

    private async processDeleteCustomers( manager: EntityManager, vendorCompetencyId: number, vendorCompetencyTempId: number, ) {
            let existingTemps = await manager.find(
                VendorCustomerReferenceTemp,
                {
                    where: {
                        vendorCompetencyTempId,
                    },
                },
            );
    
            // Belum pernah copy child dari master
            if (!existingTemps.length) {
    
                await this.copyCustomersToTemp(
                    manager,
                    vendorCompetencyId,
                    vendorCompetencyTempId,
                );
    
                existingTemps = await manager.find(
                    VendorCustomerReferenceTemp,
                    {
                        where: {
                            vendorCompetencyTempId,
                        },
                    },
                );
            }
    
            if (!existingTemps.length) {
                return;
            }
    
            const removeItems: VendorCustomerReferenceTemp[] = [];
            const updateItems: VendorCustomerReferenceTemp[] = [];
    
            for (const item of existingTemps) {
    
                // Child baru dibuat di draft
                if (item.action === VendorTempAction.CREATE) {
                    removeItems.push(item);
                    continue;
                }
    
                // Child dari master
                item.action = VendorTempAction.DELETE;
                updateItems.push(item);
            }
    
            if (removeItems.length) {
                await manager.remove(removeItems);
            }
    
            if (updateItems.length) {
                await manager.save(updateItems);
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
            if (source === 'MASTER') {
                id = masterId;
            } else if (source === 'TEMP') {
                id = tempId;
            }

            const res = source === 'TEMP' 
                ? VendorCompetencyTempMapper.pagination(entity) 
                : VendorCompetencyTempMapper.pagination({ ...entity, vendorCompetencyId: entity.id } as any);
            
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
                where: { 
                    id, 
                    vendorId,
                },
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
            if (item.customerReferences?.length) {
                await Promise.all(item.customerReferences.map(async ref => {
                    if (ref.areaIds) {
                        const ids = ref.areaIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
                        if (ids.length > 0) {
                            const foundAreas = await this.areaRepo.find({
                                select : {id : true, name : true},
                                where: { id: In(ids) }
                            });
                            ref.areas = foundAreas;
                        }
                    }
                }));
            }
            const res = VendorCompetencyTempMapper.toResponse({ ...item, vendorCompetencyId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { 
                    id, 
                    vendorTempId: vendorTemp.id,
                },
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
            if (item.customerReferences) {
                const filteredReferences = item.customerReferences.filter(c => c.action !== VendorTempAction.DELETE);
                await Promise.all(filteredReferences.map(async ref => {
                    if (ref.areaIds) {
                        const ids = ref.areaIds.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
                        if (ids.length > 0) {
                            const foundAreas = await this.areaRepo.find({ select : {id : true, name : true}, where: { id: In(ids) } });
                            ref.areas = foundAreas;
                        }
                    }
                }));
                res.customerReferences = filteredReferences;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}

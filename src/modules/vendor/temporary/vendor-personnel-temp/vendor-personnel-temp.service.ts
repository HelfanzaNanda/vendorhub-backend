import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { VendorPersonnelTemp } from './entities/vendor-personnel-temp.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { DataSource, VendorTempAction } from '@common/enums';
import { CreateVendorPersonnelTempDto } from './dto/create-vendor-personnel-temp.dto';
import { DeleteVendorPersonnelTempDto, UpdateVendorPersonnelTempDto } from './dto/update-vendor-personnel-temp.dto';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VendorPersonnelTempMapper } from './mapper/vendor-personnel-temp.mapper';
import { VendorPersonnelDocumentTemp } from './entities/vendor-personnel-document-temp.entity';
import { CreateVendorPersonnelDocumentTempDto } from './dto/create-vendor-personnel-document-temp.dto';
import { PersonnelCode } from '@common/enums/personnel-type.enum';
import { DateUtil } from '@common/utils/date.util';
import { VendorPersonnelDocument } from '@modules/vendor/vendor-personnel/entities/vendor-personnel-document.entity';
import { VendorPersonnelDocumentTempResponseDto } from './dto/response-vendor-personnel-document-temp.dto.';

@Injectable()
export class VendorPersonnelTempService extends BaseDraftCrudService<VendorPersonnel, VendorPersonnelTemp> {
    constructor(
        @InjectRepository(VendorPersonnel)
        protected readonly masterRepo: Repository<VendorPersonnel>,
        @InjectRepository(VendorPersonnelTemp)
        protected readonly tempRepo: Repository<VendorPersonnelTemp>,
        protected readonly vendorTempService: VendorTempService,
        @InjectRepository(CompanyPersonnelType)
        private companyPersonnelType: Repository<CompanyPersonnelType>,
        @InjectRepository(VendorPersonnelDocument)
        private readonly documentMasterRepo: Repository<VendorPersonnelDocument>,
        @InjectRepository(VendorPersonnelDocumentTemp)
        private readonly documentTempRepo: Repository<VendorPersonnelDocumentTemp>,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected get masterIdField(): keyof VendorPersonnelTemp {
        return 'vendorPicId';
    }

    protected mapMasterToTemp(master: VendorPersonnel, vendorTempId: number, action: VendorTempAction): Partial<VendorPersonnelTemp> {
        return {
            vendorTempId,
            vendorPicId: master.id,
            action,
            personnelTypeId: master.personnelTypeId,
            titleId: master.titleId,
            name: master.name,
            jobTypeId: master.jobTypeId,
            position: master.position,
            identityTypeId: master.identityTypeId,
            identityNumber: master.identityNumber,
            email: master.email,
            phone: master.phone,
            ownershipPercentage: master.ownershipPercentage,
            privyId: master.privyId,
            enterpriseId: master.enterpriseId,
        };
    }

    async create(vendorId: number, dto: CreateVendorPersonnelTempDto) {

        const { personnelTypeCode, documents , ...data } = dto;


        const personnelType = await this.companyPersonnelType.findOne({
            where: { code: personnelTypeCode },
        });

        if (!personnelType) {
            throw new BadRequestException(`Personnel type '${personnelTypeCode}' not found`);
        }

        if (!documents?.length && personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER) {
            throw new BadRequestException(`Documents are required`);
        }

        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);


        (data as any).personnelTypeId = personnelType.id;

        return this.tempRepo.manager.transaction(async (manager) => {
            const temp = manager.create(VendorPersonnelTemp, {
                ...data,
                vendorTempId: vendorTemp.id,
                action: VendorTempAction.CREATE,
                vendorCompetencyId: null,
            } as any);

            const savedTemp = await manager.save(temp);

            if (personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER) {
                await this.createAllDocuments(manager,savedTemp.id, documents ?? []);
            }

            return savedTemp;
        });
    }

    private async createAllDocuments(manager : EntityManager, vendorPersonnelTempId : number, documents: CreateVendorPersonnelDocumentTempDto[]) {
        const items : VendorPersonnelDocumentTemp[] = [];
        const now = DateUtil.now();
        for (const incoming of documents) {
            const newTemp = manager.create(VendorPersonnelDocumentTemp, {
                vendorPersonnelTempId,
                type: incoming.type,
                validFrom: now,
                validTo: incoming.validTo,
                action: VendorTempAction.CREATE,
            });
            items.push(newTemp);
        }
        await manager.save(items);
    }

    async update(vendorId: number, id: number, data: UpdateVendorPersonnelTempDto, isMaster: boolean) {
        const personnelType = await this.companyPersonnelType.findOne({
            where: { code: data.personnelTypeCode },
        });

        if (!personnelType) {
            throw new BadRequestException(`Personnel type '${data.personnelTypeCode}' not found`);
        }



        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        const { source, documents, personnelTypeCode, ...updateData } = data;
        updateData.personnelTypeId = personnelType.id;

        return this.tempRepo.manager.transaction(async (manager) => {
            let savedTemp: VendorPersonnelTemp;

            if (isMaster) {
                const master = await manager.findOne(VendorPersonnel, {
                    where: { id },
                });

                if (!master) {
                    throw new NotFoundException(`Master data with id ${id} not found`);
                }

                let temp = await manager.findOne(VendorPersonnelTemp, {
                    where: {
                        vendorPicId: id,
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
                        manager.create(VendorPersonnelTemp, mapped as any),
                    );

                    // copy seluruh child master -> temp
                    if (personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER) {
                        await this.copyDocumentsToTemp(
                            manager,
                            master.id,
                            temp.id,
                        );
                    }
                } else {
                    Object.assign(temp, updateData);

                    temp = await manager.save(temp);
                }

                savedTemp = temp;
            } else {
                const temp = await manager.findOne(VendorPersonnelTemp, { where: { id } });

                if (!temp) {
                    throw new NotFoundException("Vendor Personnel Temp not found");
                }

                Object.assign(temp, updateData);

                savedTemp = await manager.save(temp);
            }

            if (personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER && documents) {
                await this.processDocuments(savedTemp.id, isMaster ? DataSource.MASTER : DataSource.TEMP, documents, manager);
            }

            return savedTemp;
        });
    }

    private async copyDocumentsToTemp( manager: EntityManager, vendorPersonnelId: number, vendorPersonnelTempId: number, ) {
        const masters = await manager.find(VendorPersonnelDocument, {
            where: {
                vendorPersonnelId,
            },
        });

        if (!masters.length) {
            return;
        }

        const items = masters.map(item =>
            manager.create(VendorPersonnelDocumentTemp, {
                vendorPersonnelTempId,
                vendorPersonnelDocumentId: item.id,
                type: item.type,
                validFrom: item.validFrom,
                validTo: item.validTo,
                action: undefined,
            }),
        );

        await manager.save(items);
    }

    private async processDocuments(vendorPersonnelTempId: number, parentSource: DataSource, documents: CreateVendorPersonnelDocumentTempDto[] | undefined, manager: EntityManager) {
         if (!documents?.length) {
            return;
        }
        const now = DateUtil.now();

        for (const incoming of documents ?? []) {
            switch (incoming.action) {

                case VendorTempAction.CREATE:
                    await manager.save(
                        manager.create(VendorPersonnelDocumentTemp, {
                            vendorPersonnelTempId,
                            type: incoming.type,
                            validFrom: now,
                            validTo: incoming.validTo,
                            action: VendorTempAction.CREATE,
                        })
                    );
                    break;

                case VendorTempAction.UPDATE:
                    { 
                        if (!incoming.id) {
                            throw new BadRequestException("Error Id is required");
                        }

                        const existing = await this.findDocument( manager, vendorPersonnelTempId, incoming.id, parentSource);

                        if (!existing) {
                            throw new BadRequestException(`Document with id ${incoming.id} not found.`);
                        }

                        existing.type = incoming.type;
                        existing.validTo = incoming.validTo;

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

                        const existing = await this.findDocument( manager, vendorPersonnelTempId, incoming.id, parentSource);

                        if (!existing) {
                            throw new BadRequestException(`Document with id ${incoming.id} not found.`);
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

    private async findDocument( manager: EntityManager, vendorPersonnelTempId: number, id: number, parentSource: DataSource, ) 
    {
        if (parentSource === DataSource.MASTER) {

            return manager.findOne(
                VendorPersonnelDocumentTemp,
                {
                    where:{
                        vendorPersonnelTempId,
                        vendorPersonnelDocumentId: id,
                    },
                },
            );
        }

        return manager.findOne(
            VendorPersonnelDocumentTemp,
            {
                where:{
                    id,
                },
            },
        );
    }

    async delete(vendorId: number, id: number, dto : DeleteVendorPersonnelTempDto, isMaster: boolean) {
        const personnelType = await this.companyPersonnelType.findOne({
            where: { code: dto.personnelTypeCode },
        });

        if (!personnelType) {
            throw new BadRequestException(`Personnel type '${dto.personnelTypeCode}' not found`);
        }



        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
        const { personnelTypeCode } = dto;

        return this.tempRepo.manager.transaction(async (manager) => {
            if (isMaster) {
                const master = await manager.findOne(VendorPersonnel, { where: { id } as any });
                if (!master) throw new NotFoundException(`Master data with id ${id} not found`);

                let temp = await manager.findOne(VendorPersonnelTemp, {
                    where: { 
                        vendorPicId: id,
                        vendorTempId: vendorTemp.id,
                    }
                });

                if (!temp) {
                    temp = manager.create(
                        VendorPersonnelTemp,
                        this.mapMasterToTemp(
                            master,
                            vendorTemp.id,
                            VendorTempAction.DELETE,
                        ),
                    );
                }

                temp.personnelTypeId = personnelType.id;
                temp.action = VendorTempAction.DELETE;

                const savedTemp = await manager.save(temp);

                if (personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER) {
                    await this.processDeleteDocuments(manager, master.id, savedTemp.id);
                }

                return savedTemp;
            }

            const temp = await manager.findOne(VendorPersonnelTemp, { where: { id } as any });
            if (!temp) throw new NotFoundException(`Temp data with id ${id} not found`);

            if (personnelTypeCode === PersonnelCode.AUTHORIZED_SIGNER) {
                await this.processDeleteDocuments(manager, temp.vendorPicId!!, temp.id);
            }

            return await manager.remove(temp);
        });
    }

    private async processDeleteDocuments( manager: EntityManager, vendorPersonnelId: number, vendorPersonnelTempId: number, ) {
        let existingTemps = await manager.find(
            VendorPersonnelDocumentTemp,
            {
                where: {
                    vendorPersonnelTempId,
                },
            },
        );

        // Belum pernah copy child dari master
        if (!existingTemps.length) {

            await this.copyDocumentsToTemp(
                manager,
                vendorPersonnelId,
                vendorPersonnelTempId,
            );

            existingTemps = await manager.find(
                VendorPersonnelDocumentTemp,
                {
                    where: {
                        vendorPersonnelTempId,
                    },
                },
            );
        }

        if (!existingTemps.length) {
            return;
        }

        const removeItems: VendorPersonnelDocumentTemp[] = [];
        const updateItems: VendorPersonnelDocumentTemp[] = [];

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
        const masterQb = this.masterRepo.createQueryBuilder('c')
            .leftJoinAndSelect('c.createdByUser', 'createdByUser')
            .leftJoinAndSelect('c.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('c.personnelType', 'personnelType')
            .leftJoinAndSelect('c.title', 'title')
            .leftJoinAndSelect('c.jobType', 'jobType')
            .leftJoinAndSelect('c.identityType', 'identityType')
            .where('c.vendorId = :vendorId', { vendorId })
            .andWhere('c.deletedAt IS NULL');

        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);

        const tempQb = this.tempRepo.createQueryBuilder('c')
            .leftJoinAndSelect('c.createdByUser', 'createdByUser')
            .leftJoinAndSelect('c.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('c.personnelType', 'personnelType')
            .leftJoinAndSelect('c.title', 'title')
            .leftJoinAndSelect('c.jobType', 'jobType')
            .leftJoinAndSelect('c.identityType', 'identityType')
            .where('c.vendorTempId = :vendorTempId', { vendorTempId: vendorTemp.id })
            .andWhere('c.deletedAt IS NULL');

        if (query.personnelTypeCode) {
            masterQb.andWhere('personnelType.code = :personnelTypeCode', { personnelTypeCode: query.personnelTypeCode });
            tempQb.andWhere('personnelType.code = :personnelTypeCode', { personnelTypeCode: query.personnelTypeCode });
        }

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorPicId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') {
                id = masterId;
            } else if (source === 'TEMP') {
                id = tempId;
            }
            // if (source === 'MASTER') id = masterId;
            // else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            // else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorPersonnelTempMapper.toResponse(entity) 
                : VendorPersonnelTempMapper.toResponse({ ...entity, vendorPicId: entity.id } as any);
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
            mapToResponse,
            query.sortBy || 'createdAt',
            query.sortDir || 'desc'
        );
    }

    async findOne(vendorId: number, id: number, isMaster: boolean) {
        if (isMaster) {
            const item = await this.masterRepo.findOne({
                where: { id, vendorId } as any,
                relations: ['createdByUser', 'updatedByUser', 'personnelType', 'title', 'jobType', 'identityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorPersonnelTempMapper.toResponse({ ...item, vendorPicId: item.id } as any);
            res.documents = await this.getDocuments(
                isMaster,
                isMaster ? item.id : item.id,
            );
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'personnelType', 'title', 'jobType', 'identityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorPersonnelTempMapper.toResponse(item);
            res.documents = await this.getDocuments(
                isMaster,
                isMaster ? item.id : item.id,
            );
            const masterId = item.vendorPicId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }

    private async getDocuments( isMaster: boolean, tempPersonnelId: number) : Promise<VendorPersonnelDocumentTempResponseDto[]> {
        if (isMaster) {
            const docs = await this.documentMasterRepo.find({
                where: {
                    vendorPersonnelId: tempPersonnelId,
                },
            });

            return docs.map(doc => ({
                id: doc.id!!,
                // masterId: doc.id,
                // tempId: null,
                action: null,
                type: {
                    id : doc.type,
                    name : doc.type,
                },
                // validFrom: doc.validFrom,
                validTo: doc.validTo,
            }));
        }

        const docs = await this.documentTempRepo.find({
            where: {
                vendorPersonnelTempId: tempPersonnelId,
            },
        });

        return docs.map(doc => {

            const finalId =
                doc.action === VendorTempAction.CREATE
                    ? doc.id
                    : doc.vendorPersonnelDocumentId;

            return {
                id: finalId!!,
                // masterId: doc.vendorPersonnelDocumentId,
                // tempId: doc.id,
                action: doc.action,
                type : {
                    id : doc.type,
                    name : doc.type,
                },
                // validFrom: doc.validFrom,
                validTo: doc.validTo,
            };
        });
    }
}

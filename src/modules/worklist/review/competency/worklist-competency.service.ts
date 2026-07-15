import { ReviewHelper } from '@modules/worklist/review/review.helper';
import { VendorCompetencyTemp } from "@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity";
import { WorkflowTransaction } from "@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VendorCompetency } from "@modules/vendor/vendor-competency/entities/vendor-competency.entity";
import { WorklistCompetencyMapper } from "./worklist-competency.mapper";

@Injectable()
export class WorklistCompetencyService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private readonly workflowTransactionRepository: Repository<WorkflowTransaction>,

        @InjectRepository(VendorCompetencyTemp)
        private readonly tempRepository: Repository<VendorCompetencyTemp>,
    ) {}

    async get(workflowTransactionId: number) {
        const workflow = await this.workflowTransactionRepository.findOneOrFail({
            where: { id: workflowTransactionId },
            relations: { vendorTemp: true },
        });

        
        const whereClause: any = { vendorTempId: workflow.vendorTemp.id };
        
        const temps = await this.tempRepository.find({
            select: {
                id: true,
                vendorCompetency: {
                    id: true,
                    customerReferences: {
                        id: true,
                        name: true,
                        description: true,
                        projectValue: true,
                        year: true,
                        areaIds: true,
                        file: {
                            id: true,
                            fileName: true,
                            fileSize: true,                           
                        },
                    },
                    subCategoryItem: {
                        id: true,
                        name: true,
                        code: true,
                        competencySubCategory: {
                            id: true,
                            name: true,
                            competencyCategory: {
                                id: true,
                                name: true,
                            }
                        }
                    },
                },
                subCategoryItem: {
                    id: true,
                    name: true,
                    code: true,
                    competencySubCategory: {
                        id: true,
                        name: true,
                        competencyCategory: {
                            id: true,
                            name: true,
                        }
                    }
                },
                customerReferences: {
                    id: true,
                    name: true,
                    projectValue: true,
                    year: true,
                    areaIds: true,
                    file: {
                        id: true,
                        fileName: true,
                        fileSize: true,                           
                    },
                    vendorCustomerReference: {
                        id: true,
                        name: true,
                        projectValue: true,
                        year: true,
                        areaIds: true,
                        file: {
                            id: true,
                            fileName: true,
                            fileSize: true,                           
                        }
                    },
                },
                reviewNotes: true,
                reviewStatus: true
            },
            where: whereClause,
            relations: {
                vendorCompetency: {
                    customerReferences: true,
                },
                customerReferences: {
                    vendorCustomerReference: true,
                },
                subCategoryItem: {
                    competencySubCategory: {
                        competencyCategory: true,
                    }
                }
            },
        });
        const response = WorklistCompetencyMapper.toResponse(temps);

        if (response.length === 0 && workflow.vendorTemp?.vendorId) {
            const masterData = await this.workflowTransactionRepository.manager.find(VendorCompetency, {
                select: {
                    id: true,
                    customerReferences: {
                        id: true,
                        name: true,
                        description: true,
                        projectValue: true,
                        year: true,
                        areaIds: true,
                        file: {
                            id: true,
                            fileName: true,
                            fileSize: true,                           
                        },
                    },
                    subCategoryItem: {
                        id: true,
                        name: true,
                        code: true,
                        competencySubCategory: {
                            id: true,
                            name: true,
                            competencyCategory: {
                                id: true,
                                name: true,
                            }
                        }
                    },
                },
                where: { vendorId: workflow.vendorTemp.vendorId },
                relations: {
                    customerReferences : true,
                    subCategoryItem: {
                        competencySubCategory: {
                            competencyCategory: true,
                        }
                    }
                }
            });


            return masterData.map(master => {
                const originalData = { ...master };
                delete originalData.customerReferences;

                return {
                    id: master.id,
                    action: 'NO_CHANGE',
                    reviewStatus: null,
                    reviewRemark: null,
                    originalData,
                    data: originalData,
                    customerReferences: (master.customerReferences || []).map(cr => ({
                        id: cr.id,
                        action: 'NO_CHANGE',
                        originalData: {
                            id: cr.id,
                            name: cr.name,
                            description: cr.description,
                            projectValue: cr.projectValue,
                            year: cr.year,
                            file: cr.file,
                            areaIds: cr.areaIds,
                        },
                        data: {
                            id: cr.id,
                            name: cr.name,
                            description: cr.description,
                            projectValue: cr.projectValue,
                            year: cr.year,
                            file: cr.file,
                            areaIds: cr.areaIds,
                        }
                    })),
                    permissions: ReviewHelper.getPermissions('NO_ACTION')
                };
            });
        }

        return response;
    }
}

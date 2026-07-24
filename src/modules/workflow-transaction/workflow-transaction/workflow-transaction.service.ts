import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { DataSource, Repository, EntityManager } from 'typeorm';
import { WorkflowTransaction } from './entities/workflow-transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { CreateWorkflowTransactionDto } from './dto/create-workflow-transaction.dto';
import { WORKFLOW_TRANSACTION_FIELDS } from './query/workflow-transaction-field.meta';
import { WorkflowTransactionMapper } from './mapper/workflow-transaction.mapper';
import { UpdateWorkflowTransactionDto } from './dto/update-workflow-transaction.dto';

import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { MasterWorkflowStepAssignment } from '@modules/master/workflow-step-assignment/entities/workflow-step-assignment.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
import { MasterWorkingCalendar } from '@modules/master/working-calendar/entities/working-calendar.entity';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';
import { WorkflowTransactionStatus, WorkflowTransactionStepStatus } from '@common/enums/workflow-transaction.enum';
import { DateUtil } from '@common/utils/date.util';
import { VendorStatusEnum } from '@common/enums/vendor.enum';
import { VendorTempStatus } from '@common/enums/vendor-temp-status.enum';

@Injectable()
export class WorkflowTransactionService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private workflowTransactionRepo: Repository<WorkflowTransaction>,
        private dataSource: DataSource,
    ) { }

    async start(data: { userId : number; workflowCode: string; vendorTempId: number }) {

        const { userId, workflowCode, vendorTempId } = data;

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const em = queryRunner.manager;

            // 1. Validation: Workflow
            const workflow = await em.findOne(MasterWorkflow, {
                where: { code: workflowCode, isActive: true }
            });
            if (!workflow) {
                throw new BadRequestException(`Active workflow ${workflowCode} not found`);
            }

            // 2. Validation: VendorTemp
            const vendorTemp = await em.findOne(VendorTemp, {
                where: { id: vendorTempId },
                relations: ['vendor']
            });
            if (!vendorTemp) {
                throw new BadRequestException(`VendorTemp ${vendorTempId} not found`);
            }

            const activeTrx = await em.findOne(WorkflowTransaction, {
                where: { vendorTempId: vendorTempId, status: WorkflowTransactionStatus.IN_PROGRESS }
            });
            if (activeTrx) {
                throw new BadRequestException(`VendorTemp already has an active workflow transaction`);
            }

            // 4. Area vendor
            let areaId: number | null = null;
            const vendorCompTemp = await em.findOne(VendorCompanyTemp, {
                where: { vendorTempId: vendorTempId },
                relations: ['site', 'site.area']
            });
            if (vendorCompTemp?.site?.area) {
                areaId = vendorCompTemp.site.area.id;
            } else if (vendorTemp.vendorId) {
                const vendorComp = await em.findOne(VendorCompany, {
                    where: { vendorId: vendorTemp.vendorId },
                    relations: ['site', 'site.area']
                });
                if (vendorComp?.site?.area) {
                    areaId = vendorComp.site.area.id;
                }
            }

            if (!areaId) {
                throw new BadRequestException(`Area for vendor cannot be determined. Please ensure vendor has a valid site.`);
            }

            // 5. Workflow steps
            const steps = await em.find(MasterWorkflowStep, {
                where: { workflowId: workflow.id },
                order: { sequence: 'ASC' }
            });
            if (steps.length === 0) {
                throw new BadRequestException(`Workflow ${workflowCode} has no steps configured.`);
            }

            // Reference calendars and holidays
            const calendars = await em.find(MasterWorkingCalendar);
            const holidays = await em.find(MasterHoliday);

            // 6. Create Transaction
            let transaction = em.create(WorkflowTransaction, {
                workflowId: workflow.id,
                vendorTempId: vendorTemp.id,
                siteId: vendorCompTemp?.siteId,
                status: WorkflowTransactionStatus.IN_PROGRESS,
                requesterId: userId,
                submittedAt: new Date(),
                createdBy: String(userId),
            } as any);
            transaction = await em.save(transaction);

            // 7. Create Steps
            const createdSteps: WorkflowTransactionStep[] = [];
            const now = new Date();

            for (let i = 0; i < steps.length; i++) {
                const step = steps[i];
                const assignment = await em.findOne(MasterWorkflowStepAssignment, {
                    where: { workflowStepId: step.id, areaId: areaId, isActive: true }
                });

                if (!assignment) {
                    throw new BadRequestException(`No active assignment found for step ${step.code} and area ID ${areaId}`);
                }

                let stepStatus: 'WAITING' | 'PENDING' = step.assignmentType === 'ROLE' ? 'PENDING' : 'WAITING';
                let approverId: number | null = step.assignmentType === 'USER' ? (assignment.userId ?? null) : null;

                // Only the first step starts its SLA right now
                let assignedAt = null;
                let dueAt = null;
                if (i === 0) {
                    assignedAt = new Date();
                    dueAt = DateUtil.calculateDueAt({
                        startDate: assignedAt,
                        duration: step.slaDuration,
                        unit: step.slaUnit,
                        useCalendar: step.useWorkingCalendar,
                        calendars,
                        holidays
                    });
                }

                const trxStep = em.create(WorkflowTransactionStep, {
                    workflowTransactionId: transaction.id,
                    workflowStepId: step.id,
                    userId: approverId,
                    status: stepStatus,
                    assignedAt,
                    dueAt,
                    createdBy: String(userId),
                } as any);
                const savedStep = await em.save(trxStep);
                if (i === 0) {
                    transaction.currentTransactionStepId = savedStep.id;
                    em.save(transaction);
                }
                createdSteps.push(savedStep);
            }

            // 8. History
            const history = em.create(WorkflowHistory, {
                workflowTransactionId: transaction.id,
                workflowTransactionStepId: null,
                actorId: userId,
                action: WorkflowTransactionStepStatus.SUBMITTED,
                fromStepId: null as any,
                toStepId: steps[0].id,
                remarks: 'Vendor submitted workflow',
                actionAt: new Date(),
                createdBy: userId,
            } as any);
            await em.save(history);

            // 9. Update Vendor Temp
            vendorTemp.status = VendorTempStatus.SUBMITTED;
            vendorTemp.submittedAt = new Date();
            await em.save(vendorTemp);

            if (vendorTemp.vendor) {
                vendorTemp.vendor.status = VendorStatusEnum.WAITING_FOR_APPROVAL;
                vendorTemp.vendor.updatedAt = new Date();
                vendorTemp.vendor.updatedBy = userId;
                await em.save(vendorTemp.vendor);
            }

            await queryRunner.commitTransaction();

            return {
                ...transaction,
                currentStep: steps[0],
                steps: createdSteps
            };
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async restart(data: {userId : number; vendorTempId : number}){
        const { userId, vendorTempId } = data;

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const em = queryRunner.manager;

            const calendars = await em.find(MasterWorkingCalendar);
            const holidays = await em.find(MasterHoliday);

            const vendorTemp = await em.findOne(VendorTemp, {
                where: { id: vendorTempId },
                relations: ['vendor']
            });
            if (!vendorTemp) {
                throw new BadRequestException(`VendorTemp ${vendorTempId} not found`);
            }

            const activeTrx = await em.findOne(WorkflowTransaction, {
                where: { vendorTempId: vendorTempId, status: WorkflowTransactionStatus.REVISED }
            });
            if (!activeTrx) {
                throw new BadRequestException(`VendorTemp do not have an active workflow transaction`);
            }
            const steps = await em.find(WorkflowTransactionStep, {
                where: { workflowTransactionId: activeTrx.id },
                order: { workflowStep: { sequence: 'ASC' } }
            });

            for (let i = 0; i < steps.length; i++) {
                const step = steps[i];

                if (i === 0) {
                    step.assignedAt = new Date();
                    step.dueAt = DateUtil.calculateDueAt({
                        startDate: step.assignedAt,
                        duration: step.workflowStep.slaDuration,
                        unit: step.workflowStep.slaUnit,
                        useCalendar: step.workflowStep.useWorkingCalendar,
                        calendars,
                        holidays
                    });
                    step.remarks = undefined;
                    step.status = WorkflowTransactionStepStatus.WAITING;
                    await em.save(step);
                    continue;
                }
                step.status = WorkflowTransactionStepStatus.PENDING;
                step.assignedAt = undefined;
                step.dueAt = undefined;
                await em.save(step);
            }

            activeTrx.status = WorkflowTransactionStatus.IN_PROGRESS;
            activeTrx.currentTransactionStepId = steps[0].id;
            activeTrx.submittedAt = new Date();
            activeTrx.updatedBy = userId;
            await em.save(activeTrx);

            const history = em.create(WorkflowHistory, {
                workflowTransactionId: activeTrx.id,
                workflowTransactionStepId: null,
                actorId: userId,
                action: WorkflowTransactionStepStatus.SUBMITTED,
                fromStepId: null as any,
                toStepId: steps[0].id,
                remarks: 'Vendor resubmitted after revision',
                actionAt: new Date(),
                createdBy: userId,
            } as any);
            await em.save(history);

            vendorTemp.status = 'SUBMITTED';
            vendorTemp.submittedAt = new Date();
            await em.save(vendorTemp);

            if (vendorTemp.vendor) {
                vendorTemp.vendor.status = VendorStatusEnum.WAITING_FOR_APPROVAL;
                vendorTemp.vendor.updatedAt = new Date();
                vendorTemp.vendor.updatedBy = userId;
                await em.save(vendorTemp.vendor);
            }
            
            await queryRunner.commitTransaction();

            return {
                ...activeTrx,
                currentStep: steps[0],
                steps: steps
            };
            
        }catch(error){
            await queryRunner.rollbackTransaction();
            throw error;
        }finally{
            await queryRunner.release();
        }
    }

    async create(data: CreateWorkflowTransactionDto) {
        return this.workflowTransactionRepo.save(this.workflowTransactionRepo.create(data as any));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.workflowTransactionRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(WORKFLOW_TRANSACTION_FIELDS).map(
            (f) => f.column,
        );
        qb.select(selectColumns);
        const result = await paginate(qb, query, WORKFLOW_TRANSACTION_FIELDS);
        return {
            data: WorkflowTransactionMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
            select: {
                createdByUser: { username: true },
                updatedByUser: { username: true },
            },
            where: { id },
            relations: {
                createdByUser: true,
                updatedByUser: true,
            },
        });
        if (!workflowTransaction) throw new NotFoundException();
        return WorkflowTransactionMapper.toResponse(workflowTransaction as any);
    }

    async update(id: number, data: UpdateWorkflowTransactionDto) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
            where: { id },
        });
        if (!workflowTransaction)
            throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(workflowTransaction, data);
        return this.workflowTransactionRepo.save(workflowTransaction);
    }

    async delete(id: number) {
        const workflowTransaction = await this.workflowTransactionRepo.findOne({
            where: { id },
        });
        if (!workflowTransaction)
            throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        (workflowTransaction as any).deletedBy = userId;
        (workflowTransaction as any).deletedAt = new Date();

        return this.workflowTransactionRepo.save(workflowTransaction);
    }
}
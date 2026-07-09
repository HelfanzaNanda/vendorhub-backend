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

@Injectable()
export class WorkflowTransactionService {
    constructor(
        @InjectRepository(WorkflowTransaction)
        private workflowTransactionRepo: Repository<WorkflowTransaction>,
        private dataSource: DataSource,
    ) {}

    private calculateDueAt(
        startDate: Date,
        duration: number,
        unit: string,
        useCalendar: boolean,
        calendars: MasterWorkingCalendar[],
        holidays: MasterHoliday[],
    ): Date {
        const result = new Date(startDate);
        
        if (!useCalendar) {
            if (unit === 'DAY') result.setDate(result.getDate() + duration);
            else if (unit === 'HOUR') result.setHours(result.getHours() + duration);
            return result;
        }

        if (unit === 'HOUR') {
            result.setHours(result.getHours() + duration);
            return result;
        }

        let daysAdded = 0;
        const holidayDates = holidays.map(h => {
            const d = new Date(h.holidayDate);
            return d.toISOString().split('T')[0];
        });
        const workingDays = new Set(calendars.filter(c => c.isWorkingDay).map(c => c.dayOfWeek));

        while (daysAdded < duration) {
            result.setDate(result.getDate() + 1);
            const dateStr = result.toISOString().split('T')[0];
            const isHoliday = holidayDates.includes(dateStr);
            const isWorkingDay = workingDays.has(result.getDay());
            
            if (!isHoliday && isWorkingDay) {
                daysAdded++;
            }
        }
        
        const calendar = calendars.find(c => c.dayOfWeek === result.getDay());
        if (calendar && calendar.endTime) {
            const [hours, minutes] = calendar.endTime.split(':');
            result.setHours(Number(hours), Number(minutes), 0, 0);
        }
        return result;
    }

    async start(data: { workflowCode: string; vendorTempId: number }) {
        const requesterId = RequestContext.userId;
        if (!requesterId) {
            throw new BadRequestException('Authenticated user is required to start a workflow');
        }

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const em = queryRunner.manager;

            // 1. Validation: Workflow
            const workflow = await em.findOne(MasterWorkflow, { 
                where: { code: data.workflowCode, isActive: true } 
            });
            if (!workflow) {
                throw new BadRequestException(`Active workflow ${data.workflowCode} not found`);
            }

            // 2. Validation: VendorTemp
            const vendorTemp = await em.findOne(VendorTemp, { 
                where: { id: data.vendorTempId },
                relations: ['vendor']
            });
            if (!vendorTemp) {
                throw new BadRequestException(`VendorTemp ${data.vendorTempId} not found`);
            }

            // 3. Validation: Active Transaction Check
            const activeTrx = await em.findOne(WorkflowTransaction, {
                where: { vendorTempId: data.vendorTempId, status: 'IN_PROGRESS' }
            });
            if (activeTrx) {
                throw new BadRequestException(`VendorTemp already has an active workflow transaction`);
            }

            // 4. Area vendor
            let areaId: number | null = null;
            const vendorCompTemp = await em.findOne(VendorCompanyTemp, {
                where: { vendorTempId: data.vendorTempId },
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
                throw new BadRequestException(`Workflow ${data.workflowCode} has no steps configured.`);
            }

            // Reference calendars and holidays
            const calendars = await em.find(MasterWorkingCalendar);
            const holidays = await em.find(MasterHoliday);

            // 6. Create Transaction
            let transaction = em.create(WorkflowTransaction, {
                workflowId: workflow.id,
                vendorTempId: vendorTemp.id,
                currentStepId: steps[0].id,
                status: 'IN_PROGRESS',
                requesterId: requesterId,
                submittedAt: new Date(),
                createdBy: String(requesterId),
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
                    dueAt = this.calculateDueAt(assignedAt, step.slaDuration, step.slaUnit, step.useWorkingCalendar, calendars, holidays);
                }

                const trxStep = em.create(WorkflowTransactionStep, {
                    workflowTransactionId: transaction.id,
                    workflowStepId: step.id,
                    userId: approverId,
                    status: stepStatus,
                    assignedAt,
                    dueAt,
                    createdBy: String(requesterId),
                } as any);
                const savedStep = await em.save(trxStep);
                createdSteps.push(savedStep);
            }

            // 8. History
            const history = em.create(WorkflowHistory, {
                workflowTransactionId: transaction.id,
                workflowTransactionStepId: steps[0].id,
                actorId: requesterId,
                action: 'SUBMIT',
                fromStepId: null as any,
                toStepId: steps[0].id,
                remarks: 'Vendor submitted workflow',
                actionAt: new Date(),
                createdBy: String(requesterId),
            } as any);
            await em.save(history);

            // 9. Update Vendor Temp
            vendorTemp.status = 'SUBMITTED';
            vendorTemp.submittedAt = new Date();
            await em.save(vendorTemp);

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
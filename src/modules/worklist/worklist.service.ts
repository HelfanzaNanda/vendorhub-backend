import { SubmitWorklistDto, WorklistSubmitStatus } from './dto/submit-worklist.dto';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorStageEnum, VendorStatusEnum } from '@common/enums/vendor.enum';
import { WorklistCompanyService } from './review/company/worklist-company.service';
import { WorklistPersonnelService } from './review/personnel/worklist-personnel.service';
import { WorklistBankService } from './review/bank/worklist-bank.service';
import { WorklistAffiliationService } from './review/affiliation/worklist-affiliation.service';
import { WorklistBusinessLicenseService } from './review/business-license/worklist-business-license.service';
import { WorklistCompetencyService } from './review/competency/worklist-competency.service';
import { WorklistDocumentService } from './review/document/worklist-document.service';
import { WorklistFinancialReportService } from './review/financial-report/worklist-financial-report.service';
import { WorklistUserAccessService } from './review/user-access/worklist-user.service';
import { ModuleRef } from '@nestjs/core';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';
import { User as MasterUser } from '@modules/uman/user/entities/user.entity';
import { VendorCustomerReferenceTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-customer-reference-temp.entity';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';


import { Injectable, NotFoundException, ForbiddenException, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { WorklistRepository } from './repositories/worklist.repository';
import { WorklistCard, WorklistQueryDto } from './dto/worklist-query.dto';
import { WorklistMapper } from './mapper/worklist.mapper';
import { paginate } from '@common/pagination/pagination.helper';
import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { SlaService } from '@modules/workflow-transaction/workflow-engine/services/sla.service';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowStatusUtil } from './utils/workflow-status.util';
import { formatQuery } from 'src/utils/query.util';
import { DateUtil } from '@common/utils/date.util';
import { WorkflowHistory } from '@modules/workflow-transaction/workflow-history/entities/workflow-history.entity';
import { DataSource } from 'typeorm';
import { SaveReviewDto, ReviewEntity } from './dto/save-review.dto';
import { VendorCompanyTemp } from '@modules/vendor/temporary/vendor-company-temp/entities/vendor-company-temp.entity';
import { VendorPersonnelTemp } from '@modules/vendor/temporary/vendor-personnel-temp/entities/vendor-personnel-temp.entity';
import { VendorUserTemp } from '@modules/vendor/temporary/vendor-user-temp/entities/vendor-user-temp.entity';
import { VendorBankTemp } from '@modules/vendor/temporary/vendor-bank-temp/entities/vendor-bank-temp.entity';
import { VendorAffiliationTemp } from '@modules/vendor/temporary/vendor-affiliation-temp/entities/vendor-affiliation-temp.entity';
import { VendorBusinessLicenseTemp } from '@modules/vendor/temporary/vendor-business-license-temp/entities/vendor-business-license-temp.entity';
import { VendorCompetencyTemp } from '@modules/vendor/temporary/vendor-competency-temp/entities/vendor-competency-temp.entity';
import { VendorDocumentTemp } from '@modules/vendor/temporary/vendor-document-temp/entities/vendor-document-temp.entity';
import { VendorFinancialReportTemp } from '@modules/vendor/temporary/vendor-financial-report-temp/entities/vendor-financial-report-temp.entity';
import { WorkflowTransactionStatus, WorkflowTransactionStepStatus } from '@common/enums/workflow-transaction.enum';
import { WorkflowStepCode } from '@common/enums/workflow.enum';
import { MasterWorkingCalendar } from '@modules/master/working-calendar/entities/working-calendar.entity';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';

@Injectable()
export class WorklistService {
    constructor(
        private readonly worklistRepository: WorklistRepository, 
        private readonly slaService: SlaService,
        private readonly dataSource: DataSource,
        private readonly moduleRef: ModuleRef
    ) {}

    async getSummary(user: JwtPayload, workflowCode?: string) {
        return this.worklistRepository.findSummary(user, workflowCode);
    }

    async getList(user: JwtPayload, query: WorklistQueryDto) {
        let qb;
        switch (query.card) {
            case WorklistCard.IN_PROGRESS:
                qb = this.worklistRepository.findInProgress(user, query.workflowCode);
                break;
            case WorklistCard.COMPLETED:
                qb = this.worklistRepository.findCompleted(user, query.workflowCode);
                break;
            case WorklistCard.REJECTED:
                qb = this.worklistRepository.findRejected(user, query.workflowCode);
                break;
            case WorklistCard.OVER_SLA:
                qb = this.worklistRepository.findOverSla(user, query.workflowCode);
                break;
            case WorklistCard.NEED_MY_REVIEW:
            default:
                qb = this.worklistRepository.findNeedMyReview(user, query.workflowCode);
                break;
        }

        // Resolve business information in Service layer
        qb.leftJoin('wt.vendorTemp', 'vt')
          .leftJoin('vt.vendor', 'v')
          .leftJoin('v.vendorCompany', 'vc')
          .addSelect([
              'vt.id',
              'vt.requestNo',
              'v.id',
              'vc.id',
              'vc.companyName',
              'v.vendorType'
          ]);

        const fields = {
            requestNo: { column: 'vt.requestNo', searchable: true, orderable: true },
            vendorName: { column: 'vc.companyName', searchable: true, orderable: true },
            vendorType: { column: 'v.vendorType', searchable: true, orderable: true },
            area: { column: 'a.name', searchable: true, orderable: true },
            submittedDate: { column: 'wt.submittedAt', searchable: false, orderable: true },
            status: { column: 'wt.status', searchable: false, orderable: true },
        };

        const result = await paginate(qb, query, fields);
        result.data = await Promise.all(result.data.map(async (item : WorkflowTransaction) => {
            const sla = await this.slaService.calculate(
                item.currentTransactionStep.assignedAt || new Date(),
                item.currentTransactionStep.actionAt || new Date(),
                item.currentTransactionStep.workflowStep.slaDuration,
                item.currentTransactionStep.workflowStep.useWorkingCalendar,
            );
            return WorklistMapper.toListDto(item, sla);
        }));
        return result;
    }

    async getDetail(id: number, user: JwtPayload) {
        // Resolve business information for detail
        const qb = this.worklistRepository.findDetail(id)
            .leftJoin('wt.vendorTemp', 'vt')
            .leftJoin('vt.vendor', 'v')
            .leftJoin('v.vendorCompany', 'vc')
            .addSelect([
                'vt.id',
                'vt.requestNo',
                'v.id',
                'v.vendorType',
                'vc.id',
                'vc.companyName'
            ]);
            
        const wt = await qb.getOne();

        if (!wt) {
            throw new NotFoundException(`Workflow transaction ${id} not found`);
        }

        const approvers = await this.worklistRepository.queryGetApprovers(id).getMany();
        
        const currentWts = wt.currentTransactionStep;
        
        // canReview
        let canReview = false;
        if (wt.status === WorkflowTransactionStatus.IN_PROGRESS && currentWts?.status === WorkflowTransactionStepStatus.WAITING && currentWts.workflowStep?.code === WorkflowStepCode.ADMIN_OPS) {
            canReview = wt.site?.areaId === user.internalAreaId;
        }

        // canSubmit
        let canSubmit = false;
        if (wt.status === WorkflowTransactionStatus.IN_PROGRESS && currentWts?.status === WorkflowTransactionStepStatus.WAITING) {
            const stepCode = currentWts.workflowStep?.code;
            if (stepCode === WorkflowStepCode.ADMIN_OPS) {
                canSubmit = wt.site?.areaId === user.internalAreaId;
            } else if (stepCode === WorkflowStepCode.APPROVER_1 || stepCode === WorkflowStepCode.APPROVER_2) {
                canSubmit = currentWts.userId === user.sub || currentWts.delegationUserId === user.sub;
            }
        }

        // canDelegate
        let canDelegate = true;
        // if (wt.status === WorkflowTransactionStatus.IN_PROGRESS && currentWts?.status === WorkflowTransactionStepStatus.WAITING) {
        //     if (currentWts.userId === user.sub || currentWts.delegationUserId === user.sub) {
        //         canDelegate = true; // Assuming true if current approver
        //     }
        // }

        return {
            workflowInfo: {
                id: wt.id,
                vendorTempId: wt.vendorTemp?.id,
                workflowCode: wt.workflow?.code,
                workflowName: wt.workflow?.name,
                requestNo: wt.vendorTemp?.requestNo,
                vendorName: wt.vendorTemp?.vendor?.vendorCompany?.companyName || (wt.vendorTemp as any)?.vendorName,
                vendorType: wt.vendorTemp?.vendor?.vendorType,
                site: wt.site?.name,
                currentStep: wt.currentTransactionStep?.workflowStep?.name,
                workflow : wt.workflow.name,
                status : wt.status,
                submittedBy : `${wt.requester?.firstname} ${wt.requester?.lastname}`,
                submittedDate : DateUtil.formatDateTime(wt.createdAt),
                dueDate : DateUtil.formatDateTime(wt.currentTransactionStep?.dueAt),
            },
            approvers: approvers.map((a) => ({
                workflowTransactionStepId : a.id,
                user : {
                    name: `${a.user?.firstname} ${a.user?.lastname}`,
                    email : a.user?.email,
                },
                delegatedUser : a.delegationUser ? {
                    name: `${a.delegationUser?.firstname} ${a.delegationUser?.lastname}`,
                    email : a.delegationUser?.email,
                } : null,
                role: a.workflowStep?.name,
                actionAt: DateUtil.formatDateTime(a.actionAt),
                status : a.status,
                remarks: a.remarks
            })),
            permissions: {
                canReview,
                canSubmit,
                canDelegate
            }
        };
    }

    async getHistories(id: number) {
        const histories = await this.worklistRepository.findHistory(id);
        return histories.map((h: WorkflowHistory) => ({
            step: h.workflowTransactionStep?.workflowStep?.sequence,
            stepName: h.workflowTransactionStep?.workflowStep?.name,
            actor: `${h.actor?.firstname} ${h.actor?.lastname}`,
            action: h.action,
            remarks: h.remarks,
            actionAt: DateUtil.formatDateTime(h.actionAt),
        }));
    }

    async saveReview(workflowTransactionId: number, dto: SaveReviewDto, user: JwtPayload) {
        const wt = await this.dataSource.getRepository(WorkflowTransaction).findOne({
            where: { id: workflowTransactionId },
            relations: ['site', 'currentTransactionStep', 'currentTransactionStep.workflowStep']
        });

        if (!wt) {
            throw new NotFoundException(`WorkflowTransaction not found`);
        }

        const currentStep = wt!.currentTransactionStep;
        if (!currentStep) {
            throw new NotFoundException(`Current active WorkflowTransactionStep not found`);
        }

        if (currentStep.workflowStep?.code !== 'ADMIN_OPS') {
            throw new ForbiddenException(`Only ADMIN_OPS can review this step`);
        }

        if (wt.site?.areaId !== user.internalAreaId) {
            throw new ForbiddenException(`You can only review vendors in your area`);
        }

        let TargetEntity: any;
        switch (dto.sectionId) {
            case ReviewEntity.VENDOR_COMPANY: TargetEntity = VendorCompanyTemp; break;
            case ReviewEntity.VENDOR_PERSONNEL: TargetEntity = VendorPersonnelTemp; break;
            case ReviewEntity.VENDOR_USER_ACCESS: TargetEntity = VendorUserTemp; break;
            case ReviewEntity.VENDOR_BANK: TargetEntity = VendorBankTemp; break;
            case ReviewEntity.VENDOR_AFFILIATION: TargetEntity = VendorAffiliationTemp; break;
            case ReviewEntity.VENDOR_BUSINESS_LICENSE: TargetEntity = VendorBusinessLicenseTemp; break;
            case ReviewEntity.VENDOR_COMPETENCY: TargetEntity = VendorCompetencyTemp; break;
            case ReviewEntity.VENDOR_DOCUMENT: TargetEntity = VendorDocumentTemp; break;
            case ReviewEntity.VENDOR_FINANCIAL_REPORT: TargetEntity = VendorFinancialReportTemp; break;
            default:
                throw new NotFoundException(`Unknown section: ${dto.sectionId}`);
        }

        return this.dataSource.transaction(async (manager) => {
            const record: any = await manager.findOne(TargetEntity, {
                where: { id: dto.recordId }
            });

            if (!record) {
                throw new NotFoundException(`${dto.sectionId} with id ${dto.recordId} not found`);
            }

            if (record.reviewStatus === dto.status && record.reviewNotes === dto.remark) {
                return record; // No change needed
            }

            record.reviewStatus = dto.status;
            record.reviewNotes = dto.remark || null;

            await manager.save(TargetEntity, record);
            
            return record;
        });
    }

    async submitWorklist(workflowTransactionId: number, dto: SubmitWorklistDto, user: JwtPayload) {
        return this.dataSource.transaction(async (manager) => {
            const wt = await manager.findOne(WorkflowTransaction, {
                where: { id: workflowTransactionId },
                relations: ['site', 'currentTransactionStep', 'currentTransactionStep.workflowStep', 'vendorTemp', 'vendorTemp.vendor']
            });

            this.validatePermission(wt!, user);

            const currentStep = wt!.currentTransactionStep;
            const stepCode = currentStep.workflowStep.code;

            if (stepCode === WorkflowStepCode.ADMIN_OPS) {
                await this.validateReview(wt!.id);

                if (dto.status === WorklistSubmitStatus.APPROVED) {
                    if (!dto.vendorCategoryItemId || !dto.priority) {
                        throw new BadRequestException('Vendor Category Item and Priority are required for APPROVED status.');
                    }
                }
            }

            switch (dto.status) {
                case WorklistSubmitStatus.APPROVED:
                    await this.submitApproved(manager, wt!, currentStep, dto, user);
                    break;
                case WorklistSubmitStatus.REJECTED:
                    await this.submitRejected(manager, wt!, currentStep, dto, user);
                    break;
                case WorklistSubmitStatus.REVISED:
                    await this.submitRevised(manager, wt!, currentStep, dto, user);
                    break;
                default:
                    throw new BadRequestException('Invalid status');
            }
            
            return { message: 'Success' };
        });
    }

    private validatePermission(wt: WorkflowTransaction, user: JwtPayload) {
        if (!wt) throw new NotFoundException('Workflow transaction not found');
        if (wt.status !== WorkflowTransactionStatus.IN_PROGRESS) throw new BadRequestException('Workflow transaction is not active');
        
        const currentStep = wt!.currentTransactionStep;
        if (!currentStep) throw new BadRequestException('Current workflow transaction step not found');
        if (currentStep.status !== WorkflowTransactionStepStatus.WAITING) throw new BadRequestException('Current step is not active');

        const stepCode = currentStep.workflowStep?.code;
        if (stepCode === WorkflowStepCode.ADMIN_OPS) {
            if (wt.site?.areaId !== user.internalAreaId) {
                throw new ForbiddenException('You do not have permission to submit this worklist');
            }
        } else if (stepCode === WorkflowStepCode.APPROVER_1 || stepCode === WorkflowStepCode.APPROVER_2) {
            if (currentStep.userId !== user.sub && currentStep.delegationUserId !== user.sub) {
                throw new ForbiddenException('You do not have permission to submit this worklist');
            }
        } else {
            throw new ForbiddenException('Invalid workflow step');
        }
    }

    
    private countPendingReviews(items: any[]): number {
        if (!items || !Array.isArray(items)) return 0;
        return items.filter(x => 
            x.action !== 'NO_CHANGE' && 
            x.permissions?.showReviewSection === true && 
            x.reviewStatus == null
        ).length;
    }

    private async validateReview(workflowTransactionId: number) {
        const companyService = this.moduleRef.get(WorklistCompanyService, { strict: false });
        const personnelService = this.moduleRef.get(WorklistPersonnelService, { strict: false });
        const bankService = this.moduleRef.get(WorklistBankService, { strict: false });
        const affiliationService = this.moduleRef.get(WorklistAffiliationService, { strict: false });
        const businessLicenseService = this.moduleRef.get(WorklistBusinessLicenseService, { strict: false });
        const competencyService = this.moduleRef.get(WorklistCompetencyService, { strict: false });
        const documentService = this.moduleRef.get(WorklistDocumentService, { strict: false });
        const financialReportService = this.moduleRef.get(WorklistFinancialReportService, { strict: false });
        const userAccessService = this.moduleRef.get(WorklistUserAccessService, { strict: false });


        const configs = [
            { key: 'company', service: companyService, method: 'get', args: [workflowTransactionId] },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'BOARD_OF_DIRECTORS'], group: 'BOARD_OF_DIRECTORS' },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'SHAREHOLDER'], group: 'SHAREHOLDER' },
            { key: 'personnel', service: personnelService, method: 'get', args: [workflowTransactionId, 'AUTHORIZED_SIGNER'], group: 'AUTHORIZED_SIGNER' },
            { key: 'user-access', service: userAccessService, method: 'get', args: [workflowTransactionId] },
            { key: 'bank', service: bankService, method: 'get', args: [workflowTransactionId] },
            { key: 'affiliation', service: affiliationService, method: 'get', args: [workflowTransactionId] },
            { key: 'capability', service: businessLicenseService, method: 'get', args: [workflowTransactionId] },
            { key: 'capability', service: competencyService, method: 'get', args: [workflowTransactionId] },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'NPWP'], group: 'NPWP' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'TAXPAYER_STATUS'], group: 'TAXPAYER_STATUS' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'DEED_OF_ESTABLISHMENT'], group: 'DEED_OF_ESTABLISHMENT' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'DEED_OF_AMENDMENT'], group: 'DEED_OF_AMENDMENT' },
            { key: 'document', service: documentService, method: 'get', args: [workflowTransactionId, 'ORGANIZATIONAL_STRUCTURE'], group: 'ORGANIZATIONAL_STRUCTURE' },
            { key: 'financial', service: financialReportService, method: 'get', args: [workflowTransactionId] },
        ];

        const reviewValidation: any = {};
        let hasPending = false;

        for (const config of configs) {
            let data = [];
            try {
                // If a service doesn't have the exact method signature or the arguments are unused, it will still work
                data = await (config.service as any)[config.method](...config.args);
            } catch (err) {
                // Ignore if tab fails (e.g. not found)
                data = [];
            }
            
            const pending = this.countPendingReviews(data);

            if (pending > 0) {
                console.log('check', {
                    pending, 
                    key: config.key, 
                    group: config.group,
                    data : JSON.stringify(data)
                });
            }

            if (!reviewValidation[config.key]) {
                reviewValidation[config.key] = { pendingReviews: 0 };
            }
            
            reviewValidation[config.key].pendingReviews += pending;
            
            if (config.group) {
                if (!reviewValidation[config.key].groups) {
                    reviewValidation[config.key].groups = {};
                }
                reviewValidation[config.key].groups[config.group] = pending;
            }

            if (pending > 0) hasPending = true;
        }

        if (hasPending) {
            throw new UnprocessableEntityException({
                message: 'Review belum selesai.',
                reviewValidation
            });
        }
    }

    private async submitApproved(manager: any, wt: WorkflowTransaction, currentStep: WorkflowTransactionStep, dto: SubmitWorklistDto, user: JwtPayload) {
        const stepCode = currentStep.workflowStep.code;
        
        currentStep.status = dto.status as unknown as WorkflowTransactionStepStatus;
        currentStep.actionAt = new Date();
        currentStep.remarks = dto.remarks;
        await manager.save(WorkflowTransactionStep, currentStep);

        await this.insertWorkflowHistory(manager, wt.id, currentStep, WorklistSubmitStatus.APPROVED, dto.remarks, user);

        const calendars = await manager.find(MasterWorkingCalendar);
        const holidays = await manager.find(MasterHoliday);

        if (stepCode === WorkflowStepCode.ADMIN_OPS) {
            const nextStep = await manager.findOne(WorkflowTransactionStep, {
                where: { workflowTransactionId: wt.id, workflowStep: { code: WorkflowStepCode.APPROVER_1 } },
                relations: ['workflowStep']
            });
            nextStep.status = WorkflowTransactionStepStatus.WAITING;
            nextStep.assignedAt = new Date();
            nextStep.dueAt =  DateUtil.calculateDueAt({
                startDate: nextStep.assignedAt,
                duration: nextStep.workflowStep.slaDuration,
                unit: nextStep.workflowStep.slaUnit,
                useCalendar: nextStep.workflowStep.useWorkingCalendar,
                calendars: calendars,
                holidays: holidays
            });
            await manager.save(WorkflowTransactionStep, nextStep);

            wt.currentTransactionStep = nextStep;
            await manager.save(WorkflowTransaction, wt);
        } else if (stepCode === WorkflowStepCode.APPROVER_1) {
            const nextStep = await manager.findOne(WorkflowTransactionStep, {
                where: { workflowTransactionId: wt.id, workflowStep: { code: WorkflowStepCode.APPROVER_2 } },
                relations: ['workflowStep']
            });
            nextStep.status = WorkflowTransactionStepStatus.WAITING;
            nextStep.assignedAt = new Date();
            nextStep.dueAt =  DateUtil.calculateDueAt({
                startDate: nextStep.assignedAt,
                duration: nextStep.workflowStep.slaDuration,
                unit: nextStep.workflowStep.slaUnit,
                useCalendar: nextStep.workflowStep.useWorkingCalendar,
                calendars: calendars,
                holidays: holidays
            });
            await manager.save(WorkflowTransactionStep, nextStep);

            wt.currentTransactionStep = nextStep;
            await manager.save(WorkflowTransaction, wt);
        } else if (stepCode === WorkflowStepCode.APPROVER_2) {
            wt.status = WorkflowTransactionStatus.COMPLETED;
            wt.completedAt = new Date();
            await manager.save(WorkflowTransaction, wt);

            const vendor = wt.vendorTemp?.vendor;
            if (vendor) {
                vendor.status = VendorStatusEnum.ACTIVE;
                if (!vendor.vendorCode) {
                    vendor.vendorCode = 'VND' + new Date().getTime(); // Generate code
                }
                vendor.categoryItemId = dto.vendorCategoryItemId;
                vendor.vendorStage = VendorStageEnum.VENDOR;
                vendor.priority = dto.priority;
                await manager.save(Vendor, vendor);
            }

            await this.moveTempToMaster(manager, wt);
        }
    }

    private async submitRejected(manager: any, wt: WorkflowTransaction, currentStep: WorkflowTransactionStep, dto: SubmitWorklistDto, user: JwtPayload) {
        const stepCode = currentStep.workflowStep.code;

        currentStep.status = dto.status as unknown as WorkflowTransactionStepStatus;
        currentStep.actionAt = new Date();
        currentStep.remarks = dto.remarks;
        await manager.save(WorkflowTransactionStep, currentStep);

        await this.insertWorkflowHistory(manager, wt.id, currentStep, WorklistSubmitStatus.REJECTED, dto.remarks, user);

        const calendars = await manager.find(MasterWorkingCalendar);
        const holidays = await manager.find(MasterHoliday);

        if (stepCode === WorkflowStepCode.ADMIN_OPS) {
            const nextStep = await manager.findOne(WorkflowTransactionStep, {
                where: { workflowTransactionId: wt.id, workflowStep: { code: WorkflowStepCode.APPROVER_1 } },
                relations: ['workflowStep']
            });
            nextStep.status = WorkflowTransactionStepStatus.WAITING;
            nextStep.assignedAt = new Date();
            nextStep.dueAt =  DateUtil.calculateDueAt({
                startDate: nextStep.assignedAt,
                duration: nextStep.workflowStep.slaDuration,
                unit: nextStep.workflowStep.slaUnit,
                useCalendar: nextStep.workflowStep.useWorkingCalendar,
                calendars: calendars,
                holidays: holidays
            });
            await manager.save(WorkflowTransactionStep, nextStep);

            wt.currentTransactionStep = nextStep;
            await manager.save(WorkflowTransaction, wt);
        } else if (stepCode === WorkflowStepCode.APPROVER_1) {
            const nextStep = await manager.findOne(WorkflowTransactionStep, {
                where: { workflowTransactionId: wt.id, workflowStep: { code: WorkflowStepCode.APPROVER_2 } },
                relations: ['workflowStep']
            });
            nextStep.status = WorkflowTransactionStepStatus.WAITING;
            nextStep.assignedAt = new Date();
            nextStep.dueAt =  DateUtil.calculateDueAt({
                startDate: nextStep.assignedAt,
                duration: nextStep.workflowStep.slaDuration,
                unit: nextStep.workflowStep.slaUnit,
                useCalendar: nextStep.workflowStep.useWorkingCalendar,
                calendars: calendars,
                holidays: holidays
            });
            await manager.save(WorkflowTransactionStep, nextStep);

            wt.currentTransactionStep = nextStep;
            await manager.save(WorkflowTransaction, wt);
        } else if (stepCode === WorkflowStepCode.APPROVER_2) {
            wt.status = WorkflowTransactionStatus.REJECTED
            wt.rejectedAt = new Date();
            await manager.save(WorkflowTransaction, wt);

            const vendor = wt.vendorTemp?.vendor;
            if (vendor) {
                vendor.status = VendorStatusEnum.REJECTED;
                await manager.save(Vendor, vendor);
            }
        }
    }

    private async submitRevised(manager: any, wt: WorkflowTransaction, currentStep: WorkflowTransactionStep, dto: SubmitWorklistDto, user: JwtPayload) {
        const stepCode = currentStep.workflowStep.code;

        currentStep.status = dto.status as unknown as WorkflowTransactionStepStatus;
                currentStep.actionAt = new Date();
        currentStep.remarks = dto.remarks;
                await manager.save(WorkflowTransactionStep, currentStep);

        await this.insertWorkflowHistory(manager, wt.id, currentStep, WorklistSubmitStatus.REVISED, dto.remarks, user);

        const calendars = await manager.find(MasterWorkingCalendar);
        const holidays = await manager.find(MasterHoliday);

        if (stepCode === WorkflowStepCode.ADMIN_OPS) {
            wt.status = WorkflowTransactionStatus.REVISED;
            wt.revisedAt = new Date();
            await manager.save(WorkflowTransaction, wt);

            const vendor = wt.vendorTemp?.vendor;
            if (vendor) {
                vendor.status = VendorStatusEnum.REVISION;
                await manager.save(Vendor, vendor);
            }
            
            // Mark all steps as complete
            await manager.update(WorkflowTransactionStep, { workflowTransactionId: wt.id }, { status: WorkflowTransactionStepStatus.REVISED });

        } else if (stepCode === WorkflowStepCode.APPROVER_1 || stepCode === WorkflowStepCode.APPROVER_2) {
            const adminStep = await manager.findOne(WorkflowTransactionStep, {
                where: { workflowTransactionId: wt.id, workflowStep: { code: WorkflowStepCode.ADMIN_OPS } },
                relations: ['workflowStep']
            });
            adminStep.status = WorkflowTransactionStepStatus.WAITING;
            adminStep.assignedAt = new Date();
            adminStep.dueAt =  DateUtil.calculateDueAt({
                startDate: adminStep.assignedAt,
                duration: adminStep.workflowStep.slaDuration,
                unit: adminStep.workflowStep.slaUnit,
                useCalendar: adminStep.workflowStep.useWorkingCalendar,
                calendars: calendars,
                holidays: holidays
            });
            await manager.save(WorkflowTransactionStep, adminStep);

            wt.currentTransactionStep = adminStep;
            await manager.save(WorkflowTransaction, wt);

            // Set APPROVER_1 and APPROVER_2 back to pending if they exist
            await manager.update(WorkflowTransactionStep, { 
                workflowTransactionId: wt.id, 
                workflowStep: { code: WorkflowStepCode.APPROVER_1 } 
            }, { status: WorkflowTransactionStepStatus.PENDING, assignedAt: null, dueAt: null });

            await manager.update(WorkflowTransactionStep, { 
                workflowTransactionId: wt.id, 
                workflowStep: { code: WorkflowStepCode.APPROVER_2 } 
            }, { status: WorkflowTransactionStepStatus.PENDING, assignedAt: null, dueAt: null });

            wt.currentTransactionStep = adminStep;
            await manager.save(WorkflowTransaction, wt);
        }
    }

    private async insertWorkflowHistory(manager: any, wtId: number, currentStep: WorkflowTransactionStep, action: WorkflowTransactionStepStatus | string, remarks: string, user: JwtPayload) {
        const history = new WorkflowHistory();
        history.workflowTransactionId = wtId;
        history.workflowTransactionStepId = currentStep.id;
        history.action = action as WorkflowTransactionStepStatus;
        history.remarks = remarks;
        history.actorId = user.sub;
        history.actionAt = new Date();
        history.assignedAt = currentStep.assignedAt;
        history.dueAt = currentStep.dueAt;
        await manager.save(WorkflowHistory, history);
    }

    private async moveTempToMaster(manager: any, wt: WorkflowTransaction) {
        const handlers = [
            this.moveCompany.bind(this),
            this.movePersonnel.bind(this),
            this.moveBanks.bind(this),
            this.moveAffiliations.bind(this),
            this.moveUserAccess.bind(this),
            this.moveBusinessLicense.bind(this),
            this.moveCompetencies.bind(this),
            this.moveDocuments.bind(this),
            this.moveFinancialReports.bind(this),
        ];

        for (const handler of handlers) {
            await handler(
                manager,
                wt.vendorTemp.id,
                wt.vendorTemp.vendorId!!,
            );
        }
    }

    private async moveCompany(manager: any, vendorTempId: number, vendorId: number) {
        const temp = await manager.findOne(VendorCompanyTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        if (!temp) return;
        
        const master = await manager.findOne(VendorCompany, { where: { vendor: { id: vendorId } } }) || new VendorCompany();
        master.vendorId = vendorId;
        master.companyName = temp.companyName;
        master.siteId = temp.siteId;
        master.businessTypeId = temp.businessTypeId;
        master.countryId = temp.countryId;
        master.provinceId = temp.provinceId;
        master.cityId = temp.cityId;
        master.address = temp.address;
        master.postalCode = temp.postalCode;
        master.website = temp.website;
        master.email = temp.email;
        master.phone = temp.phone;
        await manager.save(VendorCompany, master);
    }

    private async movePersonnel(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorPersonnelTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorPersonnelId ? 
                    await manager.findOne(VendorPersonnel, { where: { id: temp.vendorPersonnelId } }) : new VendorPersonnel();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorPersonnelId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorPersonnelId;
                await manager.save(VendorPersonnel, master);
            } else if (temp.action === 'DELETE' && temp.vendorPersonnelId) {
                const master = await manager.findOne(VendorPersonnel, { where: { id: temp.vendorPersonnelId } });
                if (master) await manager.softRemove(VendorPersonnel, master);
            }
        }
    }

    private async moveBanks(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorBankTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorBankId ? 
                    await manager.findOne(VendorBank, { where: { id: temp.vendorBankId } }) : new VendorBank();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorBankId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorBankId;
                await manager.save(VendorBank, master);
            } else if (temp.action === 'DELETE' && temp.vendorBankId) {
                const master = await manager.findOne(VendorBank, { where: { id: temp.vendorBankId } });
                if (master) await manager.softRemove(VendorBank, master);
            }
        }
    }

    private async moveAffiliations(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorAffiliationTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorAffiliationId ? 
                    await manager.findOne(VendorAffiliation, { where: { id: temp.vendorAffiliationId } }) : new VendorAffiliation();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorAffiliationId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorAffiliationId;
                await manager.save(VendorAffiliation, master);
            } else if (temp.action === 'DELETE' && temp.vendorAffiliationId) {
                const master = await manager.findOne(VendorAffiliation, { where: { id: temp.vendorAffiliationId } });
                if (master) await manager.softRemove(VendorAffiliation, master);
            }
        }
    }

    private async moveUserAccess(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorUserTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorUserId ? 
                    await manager.findOne(MasterUser, { where: { id: temp.vendorUserId } }) : new MasterUser();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorUserId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorUserId;
                await manager.save(MasterUser, master);
            } else if (temp.action === 'DELETE' && temp.vendorUserId) {
                const master = await manager.findOne(MasterUser, { where: { id: temp.vendorUserId } });
                if (master) await manager.softRemove(MasterUser, master);
            }
        }
    }

    private async moveBusinessLicense(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorBusinessLicenseTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorBusinessLicenseId ? 
                    await manager.findOne(VendorBusinessLicense, { where: { id: temp.vendorBusinessLicenseId } }) : new VendorBusinessLicense();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorBusinessLicenseId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorBusinessLicenseId;
                const saved = await manager.save(VendorBusinessLicense, master);

                // industry classifications
                // Assuming it has items, but usually it's handled in a separate temp or stored as json
                // The requirements say "Kemudian sinkronkan Industry Classification." 
                // We'll leave it simple for now unless it has an explicit VendorBusinessLicenseItemTemp table
            } else if (temp.action === 'DELETE' && temp.vendorBusinessLicenseId) {
                const master = await manager.findOne(VendorBusinessLicense, { where: { id: temp.vendorBusinessLicenseId } });
                if (master) await manager.softRemove(VendorBusinessLicense, master);
            }
        }
    }

    private async moveCompetencies(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorCompetencyTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            let savedMasterId = null;
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorCompetencyId ? 
                    await manager.findOne(VendorCompetency, { where: { id: temp.vendorCompetencyId } }) : new VendorCompetency();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorCompetencyId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorCompetencyId;
                const saved = await manager.save(VendorCompetency, master);
                savedMasterId = saved.id;
            } else if (temp.action === 'DELETE' && temp.vendorCompetencyId) {
                const master = await manager.findOne(VendorCompetency, { where: { id: temp.vendorCompetencyId } });
                if (master) await manager.softRemove(VendorCompetency, master);
            }

            if (savedMasterId) {
                await this.moveCustomerReferences(manager, temp.id, savedMasterId);
            }
        }
    }

    private async moveCustomerReferences(manager: any, vendorCompetencyTempId: number, vendorCompetencyId: number) {
        const temps = await manager.find(VendorCustomerReferenceTemp, { where: { vendorCompetencyTempId } });
        // note: customer reference doesn't have reviewStatus because it uses parent's OK status
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorCustomerReferenceId ? 
                    await manager.findOne(VendorCustomerReference, { where: { id: temp.vendorCustomerReferenceId } }) : new VendorCustomerReference();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.vendorCompetencyTempId;
                delete master.vendorCustomerReferenceId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorCompetencyId = vendorCompetencyId;
                if (temp.action === 'UPDATE') master.id = temp.vendorCustomerReferenceId;
                await manager.save(VendorCustomerReference, master);
            } else if (temp.action === 'DELETE' && temp.vendorCustomerReferenceId) {
                const master = await manager.findOne(VendorCustomerReference, { where: { id: temp.vendorCustomerReferenceId } });
                if (master) await manager.softRemove(VendorCustomerReference, master);
            }
        }
    }

    private async moveDocuments(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorDocumentTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorDocumentId ? 
                    await manager.findOne(VendorDocument, { where: { id: temp.vendorDocumentId } }) : new VendorDocument();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorDocumentId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorDocumentId;
                await manager.save(VendorDocument, master);
            } else if (temp.action === 'DELETE' && temp.vendorDocumentId) {
                const master = await manager.findOne(VendorDocument, { where: { id: temp.vendorDocumentId } });
                if (master) await manager.softRemove(VendorDocument, master);
            }
        }
    }

    private async moveFinancialReports(manager: any, vendorTempId: number, vendorId: number) {
        const temps = await manager.find(VendorFinancialReportTemp, { where: { vendorTempId, reviewStatus: 'OK' } });
        for (const temp of temps) {
            if (temp.action === 'CREATE' || temp.action === 'UPDATE') {
                const master = temp.action === 'UPDATE' && temp.vendorFinancialReportId ? 
                    await manager.findOne(VendorFinancialReport, { where: { id: temp.vendorFinancialReportId } }) : new VendorFinancialReport();
                if (!master) continue;
                
                Object.assign(master, temp);
                delete master.id;
                delete master.action;
                delete master.reviewStatus;
                delete master.reviewNotes;
                delete master.vendorTempId;
                delete master.vendorFinancialReportId;
                delete master.createdAt;
                delete master.updatedAt;
                master.vendorId = vendorId;
                if (temp.action === 'UPDATE') master.id = temp.vendorFinancialReportId;
                await manager.save(VendorFinancialReport, master);
            } else if (temp.action === 'DELETE' && temp.vendorFinancialReportId) {
                const master = await manager.findOne(VendorFinancialReport, { where: { id: temp.vendorFinancialReportId } });
                if (master) await manager.softRemove(VendorFinancialReport, master);
            }
        }
    }

}
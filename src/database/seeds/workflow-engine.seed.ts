import { DataSource, In } from 'typeorm';
import { Role } from '@modules/uman/role/entities/role.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { MasterWorkflowStepAssignment } from '@modules/master/workflow-step-assignment/entities/workflow-step-assignment.entity';
import { MasterWorkingCalendar } from '@modules/master/working-calendar/entities/working-calendar.entity';
import { MasterHoliday } from '@modules/master/holiday/entities/holiday.entity';
import * as bcrypt from 'bcrypt';

export async function seedWorkflowEngine(dataSource: DataSource) {
    console.log('Seeding Workflow Engine...');
    const queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const roleRepo = queryRunner.manager.getRepository(Role);
        const userRepo = queryRunner.manager.getRepository(User);
        const userHasRoleRepo = queryRunner.manager.getRepository(UserHasRole);
        const areaRepo = queryRunner.manager.getRepository(Area);
        const siteRepo = queryRunner.manager.getRepository(Site);
        const workflowRepo = queryRunner.manager.getRepository(MasterWorkflow);
        const stepRepo = queryRunner.manager.getRepository(MasterWorkflowStep);
        const assignmentRepo = queryRunner.manager.getRepository(MasterWorkflowStepAssignment);
        const calendarRepo = queryRunner.manager.getRepository(MasterWorkingCalendar);
        const holidayRepo = queryRunner.manager.getRepository(MasterHoliday);

        // 1. Roles
        const requiredRoles = ['ADMIN_OPS', 'APPROVER'];
        const roleEntities: Record<string, Role> = {};
        for (const roleCode of requiredRoles) {
            let role = await roleRepo.findOne({ where: { code: roleCode } });
            if (!role) {
                role = roleRepo.create({
                    code: roleCode,
                    name: roleCode === 'ADMIN_OPS' ? 'Admin Ops' : 'Approver',
                    type: 'INTERNAL',
                });
                await roleRepo.save(role);
            }
            roleEntities[roleCode] = role;
        }

        // 2. Areas & Sites & Users
        const areasToSeed = ['HEAD OFFICE', 'JABOTABEK JABAR AREA', 'JAWA BALI AREA', 'PAMASUKA AREA', 'SUMATERA AREA'];
        const defaultPassword = await bcrypt.hash('password123', 10);
        
        // Cache users for step assignments
        // areaCode -> RoleCode -> User[]
        const areaRoleUsers: Record<string, Record<string, User[]>> = {};

        for (const areaCode of areasToSeed) {
            areaRoleUsers[areaCode] = { 'ADMIN_OPS': [], 'APPROVER': [] };
            const area = await areaRepo.findOne({ where: { code: areaCode } });
            if (!area) {
                console.warn(`Area ${areaCode} not found, skipping user seeding for this area.`);
                continue;
            }

            const site = await siteRepo.findOne({ where: { area: { id: area.id } } });
            if (!site) {
                console.warn(`Site for Area ${areaCode} not found, skipping.`);
                continue;
            }
            
            const areaPrefix = areaCode.toLowerCase().replace(/_/g, '').substring(0, 3); // ho, jab, jaw, pam, sum
            
            // Seed 5 Admin Ops
            for (let i = 1; i <= 5; i++) {
                const username = `adminops.${areaPrefix}${i}`;
                let user = await userRepo.findOne({ where: { username } });
                if (!user) {
                    user = userRepo.create({
                        username,
                        email: `${username}@example.com`,
                        password: defaultPassword,
                        site: site,
                        type: 'INTERNAL',
                        effectiveStartDate: new Date(),
                        effectiveEndDate: new Date('2037-12-31'),
                    });
                    user = await userRepo.save(user);
                    await userHasRoleRepo.save(userHasRoleRepo.create({
                        user,
                        role: roleEntities['ADMIN_OPS'],
                        isActive: true,
                        effectiveStartDate: new Date(),
                        effectiveEndDate: new Date('2037-12-31'),
                    }));
                }
                areaRoleUsers[areaCode]['ADMIN_OPS'].push(user);
            }

            // Seed 10 Approvers
            for (let i = 1; i <= 10; i++) {
                const username = `approver.${areaPrefix}${i}`;
                let user = await userRepo.findOne({ where: { username } });
                if (!user) {
                    user = userRepo.create({
                        username,
                        email: `${username}@example.com`,
                        password: defaultPassword,
                        site: site,
                        type: 'INTERNAL',
                        effectiveStartDate: new Date(),
                        effectiveEndDate: new Date('2037-12-31'),
                    });
                    user = await userRepo.save(user);
                    await userHasRoleRepo.save(userHasRoleRepo.create({
                        user,
                        role: roleEntities['APPROVER'],
                        isActive: true,
                        effectiveStartDate: new Date(),
                        effectiveEndDate: new Date('2037-12-31'),
                    }));
                }
                areaRoleUsers[areaCode]['APPROVER'].push(user);
            }
        }

        // 3. Workflows
        const workflowsData = [
            { code: 'WF_CALON_VENDOR', name: 'Workflow Data Calon Vendor' },
            { code: 'WF_UBAH_VENDOR', name: 'Workflow Ubah Data Vendor' },
            { code: 'WF_TTD', name: 'Workflow Tanda Tangan Digital' },
            { code: 'WF_PTR', name: 'Workflow Proposed to Reject' },
            { code: 'WF_DCA', name: 'Workflow Delete Company Account' },
            { code: 'WF_REAKTIVASI', name: 'Workflow Reaktivasi' },
            { code: 'WF_BLACKLIST', name: 'Workflow Blacklist / Unblacklist' },
            { code: 'WF_ROLE_EXPIRED', name: 'Workflow Role Expired' },
        ];

        for (const wf of workflowsData) {
            let workflow = await workflowRepo.findOne({ where: { code: wf.code } });
            if (!workflow) {
                workflow = workflowRepo.create({
                    code: wf.code,
                    name: wf.name,
                    version: 1,
                    isActive: true,
                });
                workflow = await workflowRepo.save(workflow);
            }

            // 4. Workflow Steps
            const stepsData = [
                { sequence: 1, code: 'ADMIN_OPS', name: 'Admin Ops', assignmentType: 'ROLE', canApprove: true, canReject: false, canRevise: false, slaDuration: 2, slaUnit: 'DAY', useWorkingCalendar: true, isStart: true, isEnd: false },
                { sequence: 2, code: 'APPROVER_1', name: 'Approver 1', assignmentType: 'USER', canApprove: true, canReject: true, canRevise: true, slaDuration: 2, slaUnit: 'DAY', useWorkingCalendar: true, isStart: false, isEnd: false },
                { sequence: 3, code: 'APPROVER_2', name: 'Approver 2', assignmentType: 'USER', canApprove: true, canReject: true, canRevise: true, slaDuration: 2, slaUnit: 'DAY', useWorkingCalendar: true, isStart: false, isEnd: true },
            ];

            const createdSteps: MasterWorkflowStep[] = [];
            for (const stepData of stepsData) {
                let step: any = await stepRepo.findOne({ where: { workflowId: workflow.id, sequence: stepData.sequence } });
                if (!step) {
                    const newStep = stepRepo.create({
                        workflowId: workflow.id,
                        ...stepData,
                    } as any);
                    step = await stepRepo.save(newStep as any);
                }
                if (step) {
                    createdSteps.push(step);
                }
            }

            // 5. Workflow Step Assignments per area
            for (const areaCode of areasToSeed) {
                const area = await areaRepo.findOne({ where: { code: areaCode } });
                if (!area) continue;
                
                const opsUsers = areaRoleUsers[areaCode]['ADMIN_OPS'];
                const appUsers = areaRoleUsers[areaCode]['APPROVER'];
                if (appUsers.length < 2) continue; // Need at least 2 approvers

                for (const step of createdSteps) {
                    // Check if assignment exists
                    const existingAss = await assignmentRepo.findOne({ where: { workflowStepId: step.id, areaId: area.id } });
                    if (existingAss) continue;

                    if (step.sequence === 1) { // Admin Ops (ROLE)
                        await assignmentRepo.save(assignmentRepo.create({
                            workflowStepId: step.id,
                            areaId: area.id,
                            roleId: roleEntities['ADMIN_OPS'].id,
                            isActive: true,
                        }));
                    } else if (step.sequence === 2) { // Approver 1 (USER)
                        await assignmentRepo.save(assignmentRepo.create({
                            workflowStepId: step.id,
                            areaId: area.id,
                            userId: appUsers[0].id,
                            isActive: true,
                        }));
                    } else if (step.sequence === 3) { // Approver 2 (USER)
                        await assignmentRepo.save(assignmentRepo.create({
                            workflowStepId: step.id,
                            areaId: area.id,
                            userId: appUsers[1].id, // different approver
                            isActive: true,
                        }));
                    }
                }
            }
        }

        // 6. Working Calendar
        const existingCalendars = await calendarRepo.count();
        if (existingCalendars === 0) {
            for (let day = 0; day <= 6; day++) {
                const isWorkingDay = day >= 1 && day <= 5;
                await calendarRepo.save(calendarRepo.create({
                    dayOfWeek: day,
                    startTime: isWorkingDay ? '08:00:00' : '00:00:00',
                    endTime: isWorkingDay ? '17:00:00' : '00:00:00',
                    isWorkingDay: isWorkingDay,
                }));
            }
        }

        // 7. Holidays
        const holidaysData = [
            { date: '2026-01-01', name: 'Tahun Baru Masehi' },
            { date: '2026-02-17', name: 'Isra Mikraj Nabi Muhammad SAW' },
            { date: '2026-03-20', name: 'Hari Raya Nyepi' },
            { date: '2026-03-21', name: 'Hari Raya Idul Fitri' },
            { date: '2026-03-22', name: 'Hari Raya Idul Fitri' },
            { date: '2026-05-01', name: 'Hari Buruh Internasional' },
            { date: '2026-05-14', name: 'Kenaikan Isa Al Masih' },
            { date: '2026-05-28', name: 'Hari Raya Idul Adha' },
            { date: '2026-06-01', name: 'Hari Lahir Pancasila' },
            { date: '2026-06-18', name: 'Tahun Baru Islam 1448 H' },
            { date: '2026-08-17', name: 'Hari Kemerdekaan RI' },
            { date: '2026-08-27', name: 'Maulid Nabi Muhammad SAW' },
            { date: '2026-12-25', name: 'Hari Raya Natal' },
        ];
        
        for (const hol of holidaysData) {
            const hdate = new Date(hol.date);
            const exists = await holidayRepo.findOne({ where: { holidayName: hol.name } });
            if (!exists) {
                await holidayRepo.save(holidayRepo.create({
                    holidayDate: hdate,
                    holidayName: hol.name,
                }));
            }
        }

        await queryRunner.commitTransaction();
        console.log('✅ Workflow Engine seeded successfully');
    } catch (err) {
        await queryRunner.rollbackTransaction();
        console.error('❌ Failed to seed Workflow Engine:', err);
        throw err;
    } finally {
        await queryRunner.release();
    }
}

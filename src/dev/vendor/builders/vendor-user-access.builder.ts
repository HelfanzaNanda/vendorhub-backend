import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
// import { VendorUserAccess } from '@modules/vendor/vendor-user-access/entities/vendor-user-access.entity';
import { faker } from '@faker-js/faker';
import { User } from '@modules/uman/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { DateUtil } from '@common/utils/date.util';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { RoleEnum } from '@common/enums/role.enum';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Area } from '@modules/master/area/entities/area.entity';

@Injectable()
export class VendorUserAccessBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(User);

        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let username = faker.internet.username({
            firstName : firstName.toLowerCase(),
            lastName : lastName.toLowerCase()
        });

        const password = "password";
        const hashPassword = await bcrypt.hash(password, 10);

        const area = await manager.find(Area);
        if (!vendor) {
            throw new NotFoundException('Vendor not found');
        }

        const roles = await manager.find(Role, {
            where : {
                type : 'EXTERNAL'
            },
            order: {
                id: 'ASC'
            }
        });

        if (!roles) {
            throw new NotFoundException('Role not found');
        }


        const email = faker.internet.email({
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            // provider: faker.helpers.slugify(company.companyName?.toLowerCase())
        });



        const user = await repo.save(
            repo.create({
                firstname: firstName,
                lastname: lastName,
                username: username,
                email,
                password: hashPassword,
                type: 'EXTERNAL',
                isActive: true,
                effectiveStartDate: DateUtil.now(),
                effectiveEndDate: DateUtil.addYears(DateUtil.now(),3),
                phone: faker.phone.number({
                    style : 'mobile'
                }),
                vendor : vendor,
                jobTitle: faker.person.jobTitle(),
                positionId : 1,
                areaIds : faker.helpers.arrayElements(area.map(a => a.id), 2).join(','),
                fileId : 1
            }),
        );

        await manager.save(
            manager.create(UserHasRole, {
                user: user,
                role: roles[0],
                isActive: true,
                effectiveStartDate: DateUtil.now(),
                effectiveEndDate: DateUtil.addYears(DateUtil.now(),3),
            }),
        );



        for (let i = 0; i < 3; i++) {

            let firstName = faker.person.firstName();
            let lastName = faker.person.lastName();
            let username = faker.internet.username({
                firstName : firstName.toLowerCase(),
                lastName : lastName.toLowerCase()
            });

            const password = "password";
            const hashPassword = await bcrypt.hash(password, 10);

            const email = faker.internet.email({
                firstName: firstName.toLowerCase(),
                lastName: lastName.toLowerCase(),
                // provider: faker.helpers.slugify(company.companyName?.toLowerCase())
            });

            const user = await repo.save(
                repo.create({
                    firstname: firstName,
                    lastname: lastName,
                    username: username,
                    email,
                    password: hashPassword,
                    type: 'EXTERNAL',
                    isActive: true,
                    effectiveStartDate: DateUtil.now(),
                    effectiveEndDate: DateUtil.addYears(DateUtil.now(),3),
                    phone: faker.phone.number({
                        style : 'mobile'
                    }),
                    vendor : vendor,
                    jobTitle: faker.person.jobTitle(),
                    positionId : faker.helpers.arrayElement([2, 3]),
                    areaIds : faker.helpers.arrayElements(area.map(a => a.id), 2).join(','),
                    fileId : 1
                    
                }),
            );

            await manager.save(
                manager.create(UserHasRole, {
                    user: user,
                    role: faker.helpers.uniqueArray(roles.filter(r => r.code !== 'VENDOR'), 1)[0],
                    isActive: true,
                    effectiveStartDate: DateUtil.now(),
                    effectiveEndDate: DateUtil.addYears(DateUtil.now(),3),
                }),
            );
        }

        return ;
    }
}

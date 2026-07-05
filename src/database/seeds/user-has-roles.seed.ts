import { User } from '@modules/uman/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Role } from '@modules/uman/role/entities/role.entity';

export async function seedUserHasRoles(dataSource: DataSource) {
    const userRepo = dataSource.getRepository(User);
    const roleRepo = dataSource.getRepository(Role);
    const repo = dataSource.getRepository(UserHasRole);

    const admin = await userRepo.findOne({
        where: { username: 'superuser' },
    });

    const superAdminRole = await roleRepo.findOne({
        where: { code: 'SUPER_USER' },
    });

    if (!admin || !superAdminRole) {
        throw new Error('User or Role not found for seeding user roles');
    }

    const now = new Date();
    const threeYearsLater = new Date(now);
    threeYearsLater.setFullYear(now.getFullYear() + 10);

    await repo.save(
        repo.create({
            user: {
                id: admin.id,
            },
            role: {
                id: superAdminRole.id,
            },
            isActive: true,
            effectiveStartDate: now,
            effectiveEndDate: threeYearsLater,
        }),
    );

    console.log('✅ UserHasRoles seeded');
}

import { User } from '@modules/uman/user/entities/user.entity';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';

export async function seedUsers(dataSource: DataSource) {
    const repo = dataSource.getRepository(User);

    const passwordHash = await bcrypt.hash('password', 10);
    const now = new Date();
    const threeYearsLater = new Date(now);
    threeYearsLater.setFullYear(now.getFullYear() + 10);

    const exists = await repo.findOne({
        where: {
            username: 'username',
        },
    });
    if (!exists) {
        await repo.save(
            repo.create({
                firstname: 'Super',
                lastname: 'User',
                username: 'superuser',
                email: 'superuser@vendorhub.com',
                type: 'INTERNAL',
                password: passwordHash,
                isActive: true,
                effectiveStartDate: now,
                effectiveEndDate: threeYearsLater,
            }),
        );
    }

    console.log('✅ Users seeded');
}

import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { DataSource } from 'typeorm';

const PERMISSIONS = [
    'country.pagination',
    'country.create',
    'country.find',
    'country.update',
    'country.delete',
];

export async function seedPermissions(dataSource: DataSource) {
    const repo = dataSource.getRepository(Permission);

    for (const name of PERMISSIONS) {
        const exists = await repo.findOne({ where: { name } });
        if (!exists) {
            await repo.save(
                repo.create({
                    name,
                    description: name,
                }),
            );
        }
    }

    console.log('✅ Permissions seeded');
}

import { Position } from '@modules/master/position/entities/position.entity';
import { DataSource } from 'typeorm';

export async function seedPosition(dataSource: DataSource) {
    const arr = [
        {
            code: 'AV',
            name: 'Admin Vendor',
        },
        {
            code: 'AM',
            name: 'Account Manager',
        },
        {
            code: 'AF',
            name: 'Account Finance',
        },
    ];

    const repo = dataSource.getRepository(Position);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            }),
        );
    }

    console.log('✅ Position seeded');
}

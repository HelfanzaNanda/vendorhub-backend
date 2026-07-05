import { VendorPriority } from '@modules/master/vendor-priority/entities/vendor-priority.entity';
import { DataSource } from 'typeorm';

export async function seedVendorPriority(dataSource: DataSource) {
    const arr = [
        {
            code: 'VIP',
            name: 'VIP',
        },
        {
            code: 'NON_VIP',
            name: 'NON VIP',
        },
    ];

    const repo = dataSource.getRepository(VendorPriority);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            }),
        );
    }

    console.log('✅ VendorPriority seeded');
}

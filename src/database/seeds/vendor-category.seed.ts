import { VendorCategory } from '@modules/master/vendor-category/entities/vendor-category.entity';
import { DataSource } from 'typeorm';

export async function seedVendorCategories(dataSource: DataSource) {
    const arr = [
        {
            code: 'TS00',
            name: 'AD',
            description: 'Authorized Dealers',
        },
        {
            code: 'TS01',
            name: 'GraPARI',
            description: 'GraPARI',
        },
        {
            code: 'TS02',
            name: 'Related Party',
            description: ' Related Party',
        },
        {
            code: 'TS03',
            name: 'Domestic Partner',
            description: 'Domestic Partner',
        },
        {
            code: 'TS04',
            name: 'International',
            description: 'International Partner',
        },
        {
            code: 'TS05',
            name: 'Third Party',
            description: 'Third Party',
        },
        {
            code: 'TS07',
            name: 'Employee',
            description: 'Employee',
        }
    ];

    const repo = dataSource.getRepository(VendorCategory);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
                // description: obj.description,
            }),
        );
    }

    console.log('✅ VendorCategories seeded');
}

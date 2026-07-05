import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
import { DataSource } from 'typeorm';

export async function seedAffiliateType(dataSource: DataSource) {
    const repo = dataSource.getRepository(AffiliateType);

    const arr = [
        {
            // "code" : "PEMILIK_SAHAM",
            name: 'Pemilik saham',
            description: '',
        },
        {
            // "code" : "PASSPORT",
            name: 'Holding Company',
            description: '',
        },
        {
            // "code" : "KITAS",
            name: 'Sister Company',
            description: '',
        },
    ];

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                description: obj.description,
            }),
        );
    }

    console.log('✅ AffiliateType seeded');
}

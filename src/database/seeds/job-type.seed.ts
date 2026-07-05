import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { DataSource } from 'typeorm';

export async function seedJobType(dataSource: DataSource) {
    const arr = [
        {
            code: 'DIREKTUR',
            name: 'Direktur',
        },
        {
            code: 'KOMISARIS',
            name: 'Komisaris',
        },
        {
            code: 'KUASA',
            name: 'Kuasa',
        },
    ];

    const repo = dataSource.getRepository(JobType);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            }),
        );
    }

    console.log('✅ JobType seeded');
}

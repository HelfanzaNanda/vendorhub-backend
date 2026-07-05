import { TelcoPrefix } from '@modules/master/telco-prefix/entities/telco-prefix.entity';
import { DataSource } from 'typeorm';

export async function seedTelcoPrefixes(dataSource: DataSource) {
    const arr = [
        {
            name: '0811',
            description: 'Kartu Halo 10, 11 digit',
        },
        {
            name: '0813',
            description: 'Kartu Halo, simPATI 12 digit',
        },
        {
            name: '0821',
            description: 'simPATI 12 digit',
        },
        {
            name: '0822',
            description: 'simPATI, Kartu Facebook',
        },
        {
            name: '0823',
            description: 'Kartu As 12 digit',
        },
        {
            name: '0852',
            description: 'Kartu As 12 digit',
        },
        {
            name: '0853',
            description: 'Kartu As 12 digit',
        },
        {
            name: '0812',
            description: 'Kartu Halo, simPATI 11, 12 digit',
        },
        {
            name: '0851',
            description: 'Kode Kartu AS pengganti Flexi',
        },
    ];

    const repo = dataSource.getRepository(TelcoPrefix);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                description: obj.description,
            }),
        );
    }
    console.log('✅ TelcoPrefixes seeded');
}

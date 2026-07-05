import { Area } from '@modules/master/area/entities/area.entity';
import { DataSource } from 'typeorm';

export async function seedAreas(dataSource: DataSource) {
    const arr = [
        {
            code: 'HEAD OFFICE',
            name: 'HEAD OFFICE',
        },
        {
            code: 'JABOTABEK JABAR AREA',
            name: 'JABOTABEK JABAR AREA',
        },
        {
            code: 'JAWA BALI AREA',
            name: 'JAWA BALI AREA',
        },
        {
            code: 'PAMASUKA AREA',
            name: 'PAMASUKA AREA',
        },
        {
            code: 'SUMATERA AREA',
            name: 'SUMATERA AREA',
        },
        {
            code: 'TELKOMSEL',
            name: 'TELKOMSEL',
        },
    ];

    const repo = dataSource.getRepository(Area);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            }),
        );
    }

    console.log('✅ Area seeded');
}

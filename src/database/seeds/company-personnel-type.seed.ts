import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { DataSource } from 'typeorm';

export async function seedCompanyPersonnelType(dataSource: DataSource) {
    const arr = [
        {
            code: 'BOARD_OF_DIRECTORS',
            name: 'Board of Directors',
        },
        {
            code: 'SHAREHOLDER',
            name: 'Shareholder',
        },
        {
            code: 'AUTHORIZED_SIGNER',
            name: 'Authorized Signer',
        },
    ];

    const repo = dataSource.getRepository(CompanyPersonnelType);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            }),
        );
    }

    console.log('✅ CompanyPersonnelType seeded');
}

import { FinancialPeriod } from "@modules/master/financial-period/entities/financial-period.entity";
import { DataSource } from "typeorm";

export async function seedFinancialPeriod(dataSource: DataSource) {

    const arr = [
        {
            "code" : "JUL_DES",
            "name": "Januari - Desember",
        },
        {
            "code" : "JUL_JUN",
            "name": "Juli - Juni",
        },
        {
            "code" : "OTHERS",
            "name": "Others",
        },
    ];

    const repo = dataSource.getRepository(FinancialPeriod);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
            })
        )
    }

    console.log('✅ FinancialPeriod seeded');
}
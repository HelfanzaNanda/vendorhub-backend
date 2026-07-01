import { BusinessEntityType } from "@modules/master/businness-entity-type/entities/business-entity-type.entity";
import { DataSource } from "typeorm";

export async function seedBusinessEntityType(dataSource: DataSource) {

    const arr = [
        {
            "code" : "PT",
            "name": "Perseroan Terbatas",
        },
        {
            "code" : "CV",
            "name": "Perseroan Komanditer",
        },
        {
            "code" : "fa",
            "name": "Firma",
        },
        {
            "code" : "Kop",
            "name": "Koperasi",
        },
        {
            "code" : "Perum",
            "name": "Perusahaan Umum",
        },
        {
            "code" : "Persekutuan Perdata",
            "name": "Persekutuan Perdata",
        },
        {
            "code" : "KJPP",
            "name": "Kantor Jasa Penliai Publik",
        },
        {
            "code" : "None",
            "name": "Tanpa Badan Usaha",
        }
    ];

    const repo = dataSource.getRepository(BusinessEntityType);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
            })
        )
    }

    console.log('✅ BusinessEntityType seeded');
}
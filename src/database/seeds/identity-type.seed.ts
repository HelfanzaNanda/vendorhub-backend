import { IdentityType } from "@modules/master/identity-type/entities/identity-type.entity";
import { DataSource } from "typeorm";

export async function seedIdentityType(dataSource: DataSource) {

    const arr = [
        {
            "code" : "KTP",
            "name": "KTP"
        },
        {
            "code" : "PASSPORT",
            "name": "Passport"
        },
        {
            "code" : "KITAS",
            "name": "KITAS"
        },
    ];

    const repo = dataSource.getRepository(IdentityType);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
            })
        )
    }

    console.log('✅ IdentityType seeded');
}
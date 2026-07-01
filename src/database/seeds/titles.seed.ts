import { Title } from "@modules/master/title/entities/title.entity";
import { DataSource } from "typeorm";

export async function seedTitle(dataSource: DataSource) {

    const arr = [
        {
            "code" : "BAPAK",
            "name": "Bapak"
        },
        {
            "code" : "IBU",
            "name": "Ibu"
        },
        {
            "code" : "PERUSAHAAN",
            "name": "Perusahaan"
        },
    ];

    const repo = dataSource.getRepository(Title);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
            })
        )
    }


    console.log('✅ Title seeded');
}
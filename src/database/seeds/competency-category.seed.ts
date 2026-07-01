import { CompetencyCategory } from "@modules/master/competency-category/entities/competency-category.entity";
import { DataSource } from "typeorm";

export async function seedCompetencyCategory(dataSource: DataSource) {

    const arr = [
      {
        "name" : "Building & Office Facilities",
      },
      {
        "name" : "Corporate Services",
      },
      {
        "name" : "Devices",
      },
      {
        "name" : "IT",
      },
      {
        "name" : "Marketing",
      },
      {
        "name" : "Network",
      },
      {
        "name" : "Power",
      },
      {
        "name" : "REV",
      }
    ];
    
    const repo = dataSource.getRepository(CompetencyCategory);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
            })
        )
    }

    console.log('✅ Competency Category seeded');
}
import { Area } from "@modules/master/area/entities/area.entity";
import { Site } from "@modules/master/site/entities/site.entity";
import { DataSource } from "typeorm";

export async function seedSites(dataSource: DataSource) {

    const arr :  Record<string, Record<string, string>[]>  = {
      "HEAD OFFICE": [
        {
          "code": "HEAD OFFICE",
          "name": "Head Office",
          "city": "DKI Jakarta",
          "address": "Jalan Gatot Subroto"
        }
      ],
      "JABOTABEK JABAR AREA": [
        {
          "code": "JABOTABEK AREA",
          "name": "Jabotabek Jabar Area",
          "city": "Jabotabek Jabar Area",
          "address": "Jabotabek Jabar Area"
        },
        {
          "code": "JABOTABEK CS",
          "name": "Jabotabek Regional",
          "city": "Jabotabek Regional",
          "address": "Jabotabek Regional"
        },
        {
          "code": "JAWA BARAT CS",
          "name": "Jawa Barat Regional",
          "city": "Jawa Barat Regional",
          "address": "Jawa Barat Regional"
        }
      ],
      "JAWA BALI AREA": [
        {
          "code": "JAWA TENGAH CS",
          "name": "Jawa Tengah Regional",
          "city": "Jawa Tengah Regional",
          "address": "Jawa Tengah Regional"
        },
        {
          "code": "BALI NUSRA CS",
          "name": "BALINUSRA Regional",
          "city": "BALINUSRA Regional",
          "address": "BALINUSRA Regional"
        },
        {
          "code": "JAWA BALI AREA",
          "name": "Jawa Bali Area",
          "city": "Jawa Bali Area",
          "address": "Jawa Bali Area"
        },
        {
          "code": "JAWA TIMUR CS",
          "name": "Jawa Timur Regional",
          "city": "Jawa Timur Regional",
          "address": "Jawa Timur Regional"
        }
      ],
      "PAMASUKA AREA": [
        {
          "code": "SUMALIRJA CS",
          "name": "Sulawesi Regional",
          "city": "Sulawesi Regional",
          "address": "Sulawesi Regional"
        },
        {
          "code": "KALIMANTAN CS",
          "name": "Kalimantan Regional",
          "city": "Kalimantan Regional",
          "address": "Kalimantan Regional"
        },
        {
          "code": "PUMA CS",
          "name": "Papua Maluku Regional",
          "city": "Papua Maluku Regional",
          "address": "Papua Maluku Regional"
        },
        {
          "code": "PAMASUKA AREA",
          "name": "Pamasuka Area",
          "city": "Pamasuka Area",
          "address": "Pamasuka Area"
        }
      ],
      "SUMATERA AREA": [
        {
          "code": "SUMBAGSEL CS",
          "name": "Sumbagsel Regional",
          "city": "Sumbagsel Regional",
          "address": "Sumbagsel Regional"
        },
        {
          "code": "SUMATERA AREA",
          "name": "Sumatera Area",
          "city": "Sumatera Area",
          "address": "Sumatera Area"
        },
        {
          "code": "SUMBAGTENG CS",
          "name": "Sumbagteng Regional",
          "city": "Sumbagteng Regional",
          "address": "Sumbagteng Regional"
        },
        {
          "code": "SUMBAGUT CS",
          "name": "Sumbagut Regional",
          "city": "Sumbagut Regional",
          "address": "Sumbagut Regional"
        }
      ],
      "TELKOMSEL": [
        {
          "code": "TELKOMSEL",
          "name": "Telkomsel Region",
          "city": "DKI Jakarta",
          "address": "Jl. Gatot Subroto"
        }
      ]
    }
      

    const siteRepo = dataSource.getRepository(Site);
    const areaRepo = dataSource.getRepository(Area);


    for (const [areaName, data] of Object.entries(arr)) {
        const area = await areaRepo.findOne({
          where: { name: areaName }
        });

        if (!area) {
          console.warn(`area ${areaName} does not exists`);
          continue;
        }

        for (const obj of data) {
            await siteRepo.save(
                siteRepo.create({
                    name: obj.name,
                    code: obj.code,
                    city: obj.city,
                    address : obj.address,
                    area: {
                        id: area.id
                    }
                })
            )
        }
    
        console.log(`✅ Seeded ${areaName} (${data.length} provinces)`);
    }

    console.log('✅ Sites seeded');
}
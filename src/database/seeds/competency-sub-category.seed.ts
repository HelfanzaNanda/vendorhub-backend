import { CompetencyCategory } from "@modules/master/competency-category/entities/competency-category.entity";
import { CompetencySubCategory } from "@modules/master/competency-subcategory/entities/competency-subcategory.entity";
import { DataSource } from "typeorm";

export async function seedCompetencySubCategory(dataSource: DataSource) {

    const arr: Record<string, Record<string, string>[]> = {
        "Building & Office Facilities": [
            {
                "name": "Building & Construction"
            },
            {
                "name": "Food & Beverage"
            },
            {
                "name": "Furniture & Furnishings"
            },
            {
                "name": "Office Machines & Accessories"
            },
            {
                "name": "Office Supplies & Corporate Products"
            },
            {
                "name": "Packaging Supplies"
            },
            {
                "name": "Published Products"
            },
            {
                "name": "Utilities"
            }
        ],
        "Corporate Services": [
            {
                "name": "Advisory Services"
            },
            {
                "name": "Education & Training Services"
            },
            {
                "name": "Financial & Insurance Services"
            },
            {
                "name": "Human Resources Services"
            },
            {
                "name": "Managed Services"
            },
            {
                "name": "Organization & Clubs"
            },
            {
                "name": "Permit Services"
            },
            {
                "name": "Production & Printing Services"
            },
            {
                "name": "Public Relations & Prof. Comm. Svcs"
            },
            {
                "name": "Security & Safety "
            },
            {
                "name": "Transportation & Mail Services"
            },
            {
                "name": "Travel & Entertainment"
            },
            {
                "name": "Warehouse & Storage"
            }
        ],
        "Devices": [
            {
                "name": "Call Management Systems Or Accessories"
            },
            {
                "name": "Handset Accessories"
            },
            {
                "name": "Handsets"
            },
            {
                "name": "M2M Device"
            },
            {
                "name": "Modems"
            },
            {
                "name": "Payment Device"
            },
            {
                "name": "SIM Cards"
            },
            {
                "name": "Scratch Card"
            }
        ],
        "IT": [
            {
                "name": "IT Infrastructure"
            },
            {
                "name": "IT Services"
            },
            {
                "name": "Office IT Equipment"
            },
            {
                "name": "Software/Application"
            },
            {
                "name": "Svc Delivery & Content Mgmt Platform"
            }
        ],
        "Marketing": [
            {
                "name": "Advertisement Material"
            },
            {
                "name": "Creative Agency Services"
            },
            {
                "name": "Digital Placement"
            },
            {
                "name": "Marketing & Distribution"
            },
            {
                "name": "Traditional Placement"
            }
        ],
        "Network": [
            {
                "name": "CS Core"
            },
            {
                "name": "IMS"
            },
            {
                "name": "Mobile Network Services"
            },
            {
                "name": "Network Core Service"
            },
            {
                "name": "Network Security Equipment"
            },
            {
                "name": "Network Service Equipment"
            },
            {
                "name": "Network Transmission Service"
            },
            {
                "name": "Operating Support System (OSS)"
            },
            {
                "name": "PS Core"
            },
            {
                "name": "Radio Access Network"
            },
            {
                "name": "Signalling Control Network"
            },
            {
                "name": "Subscriber Management"
            },
            {
                "name": "Supporting Tools"
            },
            {
                "name": "Transmission"
            }
        ],
        "Power": [
            {
                "name": "Batteries & Rectifiers"
            },
            {
                "name": "Power Generator and Power Supplies"
            },
            {
                "name": "Power Systems Services"
            },
            {
                "name": "Racks and Power Integrated Solutions"
            }
        ],
        "REV": [
            {
                "name": "Digital Revenue (DRE)"
            },
            {
                "name": "Network Lease (NLE)"
            }
        ]
    };

    const competencyCategoryRepo = dataSource.getRepository(CompetencyCategory);
    const competencySubCategoryRepo = dataSource.getRepository(CompetencySubCategory);


    for (const [categoryName, data] of Object.entries(arr)) {
        const category = await competencyCategoryRepo.findOne({
            where: { name: categoryName }
        });

        for (const obj of data) {
            await competencySubCategoryRepo.save(
                competencySubCategoryRepo.create({
                    name: obj.name,
                    competencyCategory: {
                        id : category?.id
                    }
                })
            )
        }

        console.log(`✅ Seeded ${category} (${data.length})`);
    }

    console.log('✅ Competency SubCategory seeded');
}
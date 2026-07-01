import { VendorCategoryItem } from "@modules/master/vendor-category-item/entities/vendor-category-item.entity";
import { VendorCategory } from "@modules/master/vendor-category/entities/vendor-category.entity";
import { DataSource } from "typeorm";

export async function seedVendorCategoryItems(dataSource: DataSource) {

    const arr: Record<string, Record<string, string>[]> = {
        "Related Party": [
            {
                "code": "TAX AUTHORITY",
                "name": "Tax Authority"
            },
            {
                "code": "INTERNAL",
                "name": "Internal Organization"
            },
            {
                "code": "SINGTEL GROUP",
                "name": "SINGTEL Group"
            },
            {
                "code": "BUMN_ND",
                "name": "BUMN_ND"
            },
            {
                "code": "BUMN",
                "name": "BUMN"
            },
            {
                "code": "KEY MANAGEMENT",
                "name": "Key Management"
            },
            {
                "code": "OTHERS_RP",
                "name": "Other Related Party"
            },
            {
                "code": "TELKOM_GROUP",
                "name": "Telkom Group"
            }
        ],
        "Employee": [
            {
                "code": "EMPLOYEE",
                "name": "Employee"
            }
        ],
        "Third Party": [
            {
                "code": "VENDOR",
                "name": "Third Party"
            }
        ],
        "Domestic Partner": [
            {
                "code": "Other Operators-Affiliate",
                "name": "Other Operators-Affiliate"
            }
        ]
    };

    const vendorCategoryRepo = dataSource.getRepository(VendorCategory);
    const vendorCategoryItemRepo = dataSource.getRepository(VendorCategoryItem);



    for (const [categoryName, items] of Object.entries(arr)) {
        // 1️⃣ upsert country
        const category = await vendorCategoryRepo.findOne({
            where: { name: categoryName }
        });

        if (!category) {
            console.warn(`category ${categoryName} does not exists`);
            continue;
        }

        for (const obj of items) {
            await vendorCategoryItemRepo.save(
                vendorCategoryItemRepo.create({
                    code: obj.code,
                    name: obj.name,
                    description: obj.name,
                    vendorCategory: {
                        id: category.id
                    },
                })
            )
        }


        console.log(`✅ Seeded ${categoryName} (${items.length} VendorCategoryItemss)`);
    }

    console.log('✅ VendorCategoryItems seeded');
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { CreateVendorCompetencyTempDto } from '@modules/vendor/temporary/vendor-competency-temp/dto/create-vendor-competency-temp.dto';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { faker } from '@faker-js/faker';
import { CreateVendorCustomerReferenceTempDto } from '@modules/vendor/temporary/vendor-competency-temp/dto/create-vendor-customer-reference-temp.dto';
import { Area } from '@modules/master/area/entities/area.entity';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
import { VendorTempAction } from '@common/enums';

@Injectable()
export class VendorCompetencyBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorCompetency);
        
        const results = [];
        if (!vendor) {
            throw new NotFoundException('Vendor not found');
        }

        const items = await manager.find(CompetencyItem);
        if (!items.length) {
            throw new NotFoundException('Competency Item not found');
        }

        const areas = await manager.find(Area);
        if (!areas.length) {
            throw new NotFoundException('Area not found');
        }

        for (let i = 0; i < 3; i++) {

            const customers : CreateVendorCustomerReferenceTempDto[] = [];

            for (let j = 0; j < 4; j++) {
                customers.push({
                    name: faker.commerce.productName(),
                    projectValue: faker.number.float({ min: 1000000, max: 1000000000 }),
                    fileId: 1,
                    description: faker.lorem.words(10),
                    year: faker.number.int({ min: 2023, max: 2025 }),
                    areaIds : faker.helpers.arrayElements(areas.map(a => a.id), 2),
                    action: VendorTempAction.NO_ACTION
                });
            }


            const params : CreateVendorCompetencyTempDto = {
                subCategoryItemId : faker.helpers.arrayElement(items).id,
                customerReferences : customers
            };

            const savedCompetency = await repo.save(repo.create({
                vendor,
                subCategoryItemId : params.subCategoryItemId
            }));

            for (const cus of customers) {
                const newTemp = manager.create(VendorCustomerReference, {
                    vendorCompetencyId : savedCompetency.id,
                    name : cus.name,
                    description : cus.description,
                    projectValue : cus.projectValue,
                    year : cus.year,
                    fileId : cus.fileId,
                    areaIds : cus.areaIds.join(','),
                });
                manager.save(newTemp);
            }


            results.push(params);
        }
        return results;
    }
}

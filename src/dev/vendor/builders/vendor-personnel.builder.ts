import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { faker } from '@faker-js/faker';
import { FakerUtil } from '@common/utils/faker.util';
import { CreateVendorPersonnelTempDto } from '@modules/vendor/temporary/vendor-personnel-temp/dto/create-vendor-personnel-temp.dto';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';
import { VendorPersonnelDocument } from '@modules/vendor/vendor-personnel/entities/vendor-personnel-document.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Injectable()
export class VendorPersonnelBuilder {
    async build(manager: EntityManager, vendor: Vendor, config: any) {
        const repo = manager.getRepository(VendorPersonnel);
        const results : VendorPersonnel[] = [];

        const types = {
            'BOARD_OF_DIRECTORS' : 1,
            'SHAREHOLDER' : 2,
            'AUTHORIZED_SIGNER' : 3
        };
        for (let index = 0; index < 4; index++) {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const fullname = `${firstName} ${lastName}`;
            const email = faker.internet.email({
                firstName, lastName,
                allowSpecialCharacters : false,
            })
            results.push(await repo.save(repo.create({
                vendor,
                personnelTypeId : types.BOARD_OF_DIRECTORS,
                titleId : FakerUtil.randomArrayElement([1, 2]),
                jobTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                position: faker.person.jobTitle(),
                identityTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                identityNumber: faker.string.numeric(16),
                name: fullname,
                email: email,
                phone: faker.phone.number({
                    style : 'mobile'
                }),
            })));
        }

        for (let index = 0; index < 4; index++) {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const fullname = `${firstName} ${lastName}`;
            const email = faker.internet.email({
                firstName, lastName,
                allowSpecialCharacters : false,
            })

            const titleId = FakerUtil.randomArrayElement([1, 2, 3]);

            if (titleId == 3) {
                results.push(await repo.save(repo.create({
                    vendor,
                    personnelTypeId : types.SHAREHOLDER,
                    titleId : titleId,
                    name: fullname,
                    position: faker.person.jobTitle(),
                    identityNumber: faker.string.numeric(16),
                    ownershipPercentage : 25
                })));
            }else {
                results.push(await repo.save(repo.create({
                    vendor,
                    personnelTypeId : types.SHAREHOLDER,
                    titleId : titleId,
                    name: fullname,
                    // jobTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                    position: faker.person.jobTitle(),
                    identityTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                    identityNumber: faker.string.numeric(16),
                    ownershipPercentage : 25
                })));
            }

        }

        for (let index = 0; index < 4; index++) {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const fullname = `${firstName} ${lastName}`;
            const email = faker.internet.email({
                firstName, lastName,
                allowSpecialCharacters : false,
            })
            const hasAuthorityLimitatino = faker.helpers.arrayElement([true, false])
            const params : CreateVendorPersonnelTempDto = {
                personnelTypeId : types.AUTHORIZED_SIGNER,
                titleId : FakerUtil.randomArrayElement([1, 2]),
                name: fullname,
                jobTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                position: faker.person.jobTitle(),
                identityTypeId: FakerUtil.randomArrayElement([1, 2, 3]),
                identityNumber: faker.string.numeric(16),
                email: email,
                phone: faker.phone.number({
                    style : 'mobile'
                }),
                privyId : faker.string.alpha({
                    length : 8,
                    casing: 'upper'
                }),
                documents : [
                    {
                        documentType : PersonnelDocumentEnum.KONTRAK,
                        validFrom : faker.date.past(),
                        validTo : faker.date.future({ years : 5}),
                    },
                    {
                        documentType : PersonnelDocumentEnum.BAPK,
                        validFrom : faker.date.past(),
                        validTo : faker.date.future({ years : 5}),
                    },
                    {
                        documentType : PersonnelDocumentEnum.BAST,
                        validFrom : faker.date.past(),
                        validTo : faker.date.future({ years : 5}),
                    },
                    {
                        documentType : PersonnelDocumentEnum.BAUT,
                        validFrom : faker.date.past(),
                        validTo : faker.date.future({ years : 5}),
                    },
                ]
            };
            if (hasAuthorityLimitatino) {
                params.hasAuthorityLimitation = hasAuthorityLimitatino;
                params.authorityLimitationFileId = 1;
                params.authorityLimitationNotes = faker.lorem.words(10);
                params.authorityLimitationExpiredAt = faker.date.future({ years : 3})
            }

            const { documents, ...paramsWithoutDocuments } = params;

            const savedPersonnel = await repo.save(repo.create({ ...paramsWithoutDocuments, vendor }));

            if (documents?.length) {
                for (const doc of documents) {
                    const newTemp = manager.create(VendorPersonnelDocument, {
                        vendorPersonnelId : savedPersonnel.id,
                        documentType : doc.documentType,
                        validFrom : doc.validFrom,
                        validTo : doc.validTo,
                    });
                    manager.save(newTemp);
                }
            }
        }

        return results;
    }
}

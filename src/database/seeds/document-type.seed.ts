import { DocumentType } from "@modules/master/document-type/entities/document-type.entity";
import { DataSource } from "typeorm";

export async function seedDocumentType(dataSource: DataSource) {

    const arr = [
        {
            "code": "NPWP",
            "name": "NPWP"
        },
        {
            "code": "TAXPAYER_STATUS",
            "name": "Taxpayer Status"
        },
        {
            "code": "DEED_OF_ESTABLISHMENT",
            "name": "Deed of Establishment"
        },
        {
            "code": "DEED_OF_AMENDMENT",
            "name": "Deed of Amendment"
        },
        {
            "code": "ORGANIZATIONAL_STRUCTURE",
            "name": "Organizational Structure"
        },
        {
            "code": "BANK_STATEMENT",
            "name": "Bank Statement"
        },
        {
            "code": "UMAN",
            "name": "Uman"
        },
        {
            "code": "FINANCIAL_STATEMENT",
            "name": "Financial Statement"
        },
        {
            "code": "CUSTOMER_REFERENCE",
            "name": "Customer Reference"
        },
        {
            "code": "BUSINESS_LICENSE",
            "name": "Business License"
        },
        {
            "code": "OTHER",
            "name": "Other"
        },
    ];

    const repo = dataSource.getRepository(DocumentType);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                code: obj.code,
            })
        )
    }

    console.log('✅ DocumentType seeded');
}

import { TermsConditionItem } from '@modules/master/terms-condition-item/entities/terms-condition-item.entity';
import { TermsCondition } from '@modules/master/terms-condition/entities/term-condition.entity';
import { DataSource } from 'typeorm';
import { TERMS_CONDITION_ITEMS_DATA_SEED } from './data/terms-condition.data';

export async function seedTermsCondition(dataSource: DataSource) {
    const tcRepo = dataSource.getRepository(TermsCondition);
    const itemRepo = dataSource.getRepository(TermsConditionItem);

    const exists = await tcRepo.count();

    if (exists > 0) {
        console.log('⏭ Terms Condition already seeded');
        return;
    }

    const termsCondition = await tcRepo.save(
        tcRepo.create({
            title: 'Syarat & Ketentuan Vendor',
            version: 'I',
            status: true,
        }),
    );

    const items = TERMS_CONDITION_ITEMS_DATA_SEED.map((item, index) =>
        itemRepo.create({
            termsCondition: {
                id: termsCondition.id,
            },
            chapter: item.chapter,
            title: item.title,
            content: item.content,
            sortOrder: index + 1,
            approvalMode: item.approvalMode,
        }),
    );

    await itemRepo.save(items);

    console.log('✅ Terms Condition seeded');
}

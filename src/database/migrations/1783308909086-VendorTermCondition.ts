import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorTermCondition1783308909086 implements MigrationInterface {
    name = 'VendorTermCondition1783308909086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vendor_term_conditions\` ADD \`terms_condition_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`vendor_term_conditions\` ADD CONSTRAINT \`FK_0d04db085f2a3f36f00a4a4c48d\` FOREIGN KEY (\`terms_condition_id\`) REFERENCES \`terms_conditions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vendor_term_conditions\` DROP FOREIGN KEY \`FK_0d04db085f2a3f36f00a4a4c48d\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`vendor_term_conditions\` DROP COLUMN \`terms_condition_id\``);
    }

}

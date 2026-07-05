import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTermsCondition1782966584650 implements MigrationInterface {
    name = 'CreateTermsCondition1782966584650';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`terms_condition_items\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`created_by\` int NULL, \`updated_by\` int NULL, \`deleted_by\` int NULL, \`chapter\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`sort_order\` varchar(255) NOT NULL, \`approval_mode\` enum ('AUTO', 'REVIEW') NOT NULL, \`terms_condition_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`,
        );
        await queryRunner.query(
            `ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_conditions\` ADD CONSTRAINT \`FK_d7c736a6174a5ae0d78c3d41355\` FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_conditions\` ADD CONSTRAINT \`FK_82a61d8778ce155c59b7f670cd6\` FOREIGN KEY (\`updated_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_condition_items\` ADD CONSTRAINT \`FK_25e97b941372fe005fa7550178b\` FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_condition_items\` ADD CONSTRAINT \`FK_aca5bf8fcdac513533b20394dea\` FOREIGN KEY (\`updated_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`terms_condition_items\` DROP FOREIGN KEY \`FK_aca5bf8fcdac513533b20394dea\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_condition_items\` DROP FOREIGN KEY \`FK_25e97b941372fe005fa7550178b\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_conditions\` DROP FOREIGN KEY \`FK_82a61d8778ce155c59b7f670cd6\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`terms_conditions\` DROP FOREIGN KEY \`FK_d7c736a6174a5ae0d78c3d41355\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`,
        );
        await queryRunner.query(
            `ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`,
        );
        await queryRunner.query(`DROP TABLE \`terms_condition_items\``);
    }
}

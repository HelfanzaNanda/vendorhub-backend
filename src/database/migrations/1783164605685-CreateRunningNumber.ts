import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRunningNumber1783164605685 implements MigrationInterface {
    name = 'CreateRunningNumber1783164605685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRunningNumber1783162487610 implements MigrationInterface {
    name = 'CreateRunningNumber1783162487610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`running_numbers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`prefix\` varchar(255) NOT NULL, \`last_number\` int NOT NULL, \`reset_type\` enum ('DAILY', 'MONTHLY', 'YEARLY', 'NEVER') NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`vendor_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`vendor_id\``);
        await queryRunner.query(`DROP TABLE \`running_numbers\``);
    }

}

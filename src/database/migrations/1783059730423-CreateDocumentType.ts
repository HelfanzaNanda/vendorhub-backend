import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDocumentType1783059730423 implements MigrationInterface {
    name = 'CreateDocumentType1783059730423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`document_types\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`created_by\` int NULL, \`updated_by\` int NULL, \`deleted_by\` int NULL, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`job_title\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`area_ids\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`position_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`document_types\` ADD CONSTRAINT \`FK_f7f8f69705cda5be450b48027f4\` FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`document_types\` ADD CONSTRAINT \`FK_6a670e59674f70f897c2847087c\` FOREIGN KEY (\`updated_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`document_types\` DROP FOREIGN KEY \`FK_6a670e59674f70f897c2847087c\``);
        await queryRunner.query(`ALTER TABLE \`document_types\` DROP FOREIGN KEY \`FK_f7f8f69705cda5be450b48027f4\``);
        await queryRunner.query(`ALTER TABLE \`user_has_roles\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`effective_start_date\` \`effective_start_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`position_id\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`area_ids\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`job_title\``);
        await queryRunner.query(`DROP TABLE \`document_types\``);
    }

}

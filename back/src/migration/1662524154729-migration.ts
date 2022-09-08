import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662524154729 implements MigrationInterface {
    name = 'migration1662524154729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tab" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "PK_b9b2db3ccfeef9aec5582b0c8da" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tab"`);
    }

}

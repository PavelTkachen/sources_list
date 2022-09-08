import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'sources_list',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/model/**.entity{.ts,.js}'],
  migrations: ['src/migration/*{.ts,.js}'],
  subscribers: ['src/subscriber/*{.ts,.js}'],
});
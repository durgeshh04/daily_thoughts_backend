import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'daily_thoughts',
  password: 'daily_thoughts',
  database: 'daily_thoughts',
  entities: [],
  synchronize: true,
};

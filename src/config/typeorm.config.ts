import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'ohzbluec',
  database: process.env.DB_NAME || 'luckalot',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: false,
};

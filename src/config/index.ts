import { join, resolve } from 'path';
import { Dialect } from 'sequelize/types';
import { config as configDotenv } from 'dotenv';

export const ENVIRONMENT = process.env.NODE_ENV || 'development';

// Load .env file
if (ENVIRONMENT !== 'production') {
  configDotenv();
}

// Configuration
export const server = {
  host:        process.env.SERVER_IP || '127.0.0.1',
  port:        parseInt(process.env.SERVER_PORT) || 8080,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200'
};

export const paths = {
  root:              process.env.NODE_PATH || resolve('.'),
  migrations:        process.env.MIGRATIONS_PATH || './lib/migrations',
  seeders:           process.env.SEEDERS_PATH || './lib/seeders',
  models:            process.env.MODEL_PATH
};

export const database = {
  host:       process.env.DB_HOST || 'localhost',
  port:       parseInt(process.env.DB_PORT) || 5432,
  database:   process.env.DB_NAME || 'database',
  username:   process.env.DB_USERNAME || 'postgres',
  password:   process.env.DB_PASSWORD || 'postgres',
  dialect:    (process.env.DB_DIALECT as Dialect) || 'postgres',
  modelPaths: [join(__dirname || '', process.env.MODEL_PATH || '')],
  sync:       {
    force: `${process.env.DB_SYNC_FORCE}` == 'true'
  }
};

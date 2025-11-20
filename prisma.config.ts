// prisma.config.ts

import type { PrismaConfig } from '@prisma/cli';
import * as dotenv from 'dotenv';

// Load environment variables from your root .env file
dotenv.config();

const config: PrismaConfig = {
  // Use the connection URL from your .env file
  datasourceUrl: process.env.DATABASE_URL,
  // Specify that we are using the SQLite adapter
  adapter: 'sqlite', 
};

export default config;
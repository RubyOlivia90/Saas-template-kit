import { PrismaClient } from '@prisma/client';
// Using require() is the most reliable way to access the class from this module
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3'); 
import betterSqlite3 from 'better-sqlite3'; 

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const driver = new betterSqlite3(databaseUrl.replace('file:', '')); 

// PrismaBetterSqlite3 is now correctly resolved as a class constructor
const adapter = new PrismaBetterSqlite3(driver as any);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, 
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
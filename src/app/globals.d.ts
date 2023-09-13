import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;

  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }

  interface Window {
    PayPal: any;
  }
}
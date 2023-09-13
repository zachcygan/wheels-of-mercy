import { PrismaClient } from '@prisma/client';

interface Window {
  PayPal: any;
}

interface Global {
  prisma: PrismaClient;
}

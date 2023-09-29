/* eslint-disable prettier/prettier */
import { INestApplication, Injectable } from '@nestjs/common';
// @ts-ignore
import { PrismaClient } from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app?:INestApplication) {
    // @ts-ignore
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

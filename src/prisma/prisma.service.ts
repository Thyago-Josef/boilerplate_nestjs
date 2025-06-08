// src/prisma/prisma.service.ts
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        // Solução para o erro de tipagem: Cast para 'any'
        // Isso informa ao TypeScript para ignorar as verificações de tipo para esta linha.
        (this as any).$on('beforeExit', async () => {
            await app.close();
        });
    }
}
// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService], // Exporta para que outros módulos possam injetar PrismaService
})
export class PrismaModule { }
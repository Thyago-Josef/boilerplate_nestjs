// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importe PrismaModule

@Module({
  imports: [PrismaModule], // Adicione PrismaModule
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
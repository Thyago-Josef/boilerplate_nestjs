// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';
import { PrismaModule } from './prisma/prisma.module';
import { DatabaseModule } from './database/database.module'; // Importe DatabaseModule
import { AppConfigModule } from './config/config.module'; // Importe AppConfigModule

@Module({
    imports: [
        AppConfigModule, // Adicione o módulo de configuração globalmente
        PrismaModule, // Para Produtos
        DatabaseModule, // Para Empresas (configuração global do TypeORM)
        ProductsModule,
        CompaniesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
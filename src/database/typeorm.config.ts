// src/database/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Company } from '../companies/entities/company.entity'; // Importe suas entidades aqui

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', // ou 'mysql', 'sqlite', etc.
    host: 'localhost',
    port: 5432,
    username: 'postgres', // Substitua
    password: '230714', // Substitua
    database: 'products_companies_db', // Substitua
    entities: [Company], // Adicione todas as entidades TypeORM aqui
    synchronize: true, // Use em desenvolvimento. EM PRODUÇÃO, USE MIGRATIONS!
    logging: true,
};
// src/companies/companies.module.ts
import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity'; // Importe a entidade
import { DatabaseModule } from '../database/database.module'; // Importe DatabaseModule

@Module({
  imports: [
    DatabaseModule, // Importe o módulo de banco de dados
    TypeOrmModule.forFeature([Company]) // Registre a entidade Company para este módulo
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [TypeOrmModule] // Se precisar exportar o TypeOrmModule para outros módulos usarem CompanyRepository
})
export class CompaniesModule { }
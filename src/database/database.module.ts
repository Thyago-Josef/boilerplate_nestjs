// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig)],
    exports: [TypeOrmModule], // Exporta TypeOrmModule para que outros módulos possam usá-lo
})
export class DatabaseModule { }
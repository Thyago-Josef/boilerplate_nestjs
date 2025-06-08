// src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ConfigService } from './config.service';

@Module({
    imports: [
        NestConfigModule.forRoot({
            load: [configuration],
            isGlobal: true, // Torna o ConfigModule disponível globalmente
        }),
    ],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class AppConfigModule { }
// src/config/config.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
    constructor(private nestConfigService: NestConfigService) { }

    get port(): number {
        return this.nestConfigService.get<number>('port');
    }

    get databasePrismaUrl(): string {
        return this.nestConfigService.get<string>('database.prismaUrl');
    }

    get databaseTypeOrmHost(): string {
        return this.nestConfigService.get<string>('database.typeorm.host');
    }
    get databaseTypeOrmPort(): number {
        return this.nestConfigService.get<number>('database.typeorm.port');
    }
    get databaseTypeOrmUsername(): string {
        return this.nestConfigService.get<string>('database.typeorm.username');
    }
    get databaseTypeOrmPassword(): string {
        return this.nestConfigService.get<string>('database.typeorm.password');
    }
    get databaseTypeOrmDatabase(): string {
        return this.nestConfigService.get<string>('database.typeorm.database');
    }
}
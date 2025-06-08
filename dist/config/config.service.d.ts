import { ConfigService as NestConfigService } from '@nestjs/config';
export declare class ConfigService {
    private nestConfigService;
    constructor(nestConfigService: NestConfigService);
    get port(): number;
    get databasePrismaUrl(): string;
    get databaseTypeOrmHost(): string;
    get databaseTypeOrmPort(): number;
    get databaseTypeOrmUsername(): string;
    get databaseTypeOrmPassword(): string;
    get databaseTypeOrmDatabase(): string;
}

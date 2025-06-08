// src/config/config.module.ts
// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config'; // Import the official NestJS ConfigModule
// import configuration from './configuration';
// import { ConfigService } from './config.service';

// src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ConfigService } from './config.service';

@Module({
    imports: [
        NestConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
    ],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class AppConfigModule { } // <--- TEM QUE ESTAR EXPORTADO ASSIM
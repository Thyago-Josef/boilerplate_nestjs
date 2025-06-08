// src/config/configuration.ts
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        prismaUrl: process.env.DATABASE_URL,
        typeorm: {
            host: process.env.DB_TYPEORM_HOST,
            port: parseInt(process.env.DB_TYPEORM_PORT, 10) || 5432,
            username: process.env.DB_TYPEORM_USERNAME,
            password: process.env.DB_TYPEORM_PASSWORD,
            database: process.env.DB_TYPEORM_DATABASE,
        },
    },
});
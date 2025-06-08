"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const company_entity_1 = require("../companies/entities/company.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '230714',
    database: 'products_companies_db',
    entities: [company_entity_1.Company],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=typeorm.config.js.map
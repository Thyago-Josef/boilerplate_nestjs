"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        try {
            return await this.prisma.product.create({
                data: createProductDto,
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.NotFoundException('Product with this name already exists.');
            }
            throw error;
        }
    }
    async findAll() {
        return await this.prisma.product.findMany();
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID "${id}" not found`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        try {
            const product = await this.prisma.product.update({
                where: { id },
                data: updateProductDto,
            });
            return product;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Product with ID "${id}" not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const product = await this.prisma.product.delete({
                where: { id },
            });
            return product;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Product with ID "${id}" not found`);
            }
            throw error;
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map
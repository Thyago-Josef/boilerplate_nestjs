// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Importe PrismaService
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client'; // Tipagem gerada pelo Prisma

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { } // Injete PrismaService

    async create(createProductDto: CreateProductDto): Promise<Product> {
        try {
            return await this.prisma.product.create({
                data: createProductDto,
            });
        } catch (error) {
            // Lidar com erros específicos do Prisma, como unique constraint
            if (error.code === 'P2002') { // Erro de unique constraint
                throw new NotFoundException('Product with this name already exists.');
            }
            throw error; // Re-throw para o filtro de exceções
        }
    }

    async findAll(): Promise<Product[]> {
        return await this.prisma.product.findMany();
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with ID "${id}" not found`);
        }
        return product;
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        try {
            const product = await this.prisma.product.update({
                where: { id },
                data: updateProductDto,
            });
            return product;
        } catch (error) {
            if (error.code === 'P2025') { // Record not found
                throw new NotFoundException(`Product with ID "${id}" not found`);
            }
            throw error;
        }
    }

    async remove(id: string): Promise<Product> {
        try {
            const product = await this.prisma.product.delete({
                where: { id },
            });
            return product;
        } catch (error) {
            if (error.code === 'P2025') { // Record not found
                throw new NotFoundException(`Product with ID "${id}" not found`);
            }
            throw error;
        }
    }
}
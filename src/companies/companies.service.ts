// src/companies/companies.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Company)
        private companiesRepository: Repository<Company>,
    ) { }

    async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const newCompany = this.companiesRepository.create(createCompanyDto);
        try {
            return await this.companiesRepository.save(newCompany);
        } catch (error) {
            if (error.code === '23505') { // PostgreSQL unique constraint error
                throw new NotFoundException('Company with this name already exists.');
            }
            throw error;
        }
    }

    async findAll(): Promise<Company[]> {
        return await this.companiesRepository.find();
    }

    async findOne(id: string): Promise<Company> {
        const company = await this.companiesRepository.findOne({ where: { id } });
        if (!company) {
            throw new NotFoundException(`Company with ID "${id}" not found`);
        }
        return company;
    }

    async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
        const company = await this.companiesRepository.preload({ id, ...updateCompanyDto });
        if (!company) {
            throw new NotFoundException(`Company with ID "${id}" not found`);
        }
        return await this.companiesRepository.save(company);
    }

    async remove(id: string): Promise<void> {
        const result = await this.companiesRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Company with ID "${id}" not found`);
        }
    }
}
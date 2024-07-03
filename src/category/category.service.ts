import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { createCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(private categoryRepository: CategoryRepository) {}

    public async createCategory(dataCategory: createCategoryDto) {
        return this.categoryRepository.createCategory(dataCategory)
    }

    public async findOneCategory(categoryId: string) {
        return this.categoryRepository.findOneCategory(categoryId)
    }
}

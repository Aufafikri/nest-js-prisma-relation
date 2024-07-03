import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post()
    public async createCategory(@Body() dataCategory: createCategoryDto) {
        return this.categoryService.createCategory(dataCategory)
    }
}

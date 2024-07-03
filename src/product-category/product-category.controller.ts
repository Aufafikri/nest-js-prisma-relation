import { Body, Controller, Post } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private productCategoryService: ProductCategoryService) {}

    @Post()
    public async createProductCategory(@Body() dataProductCategory: CreateProductCategoryDto) {
        return this.productCategoryService.createProduct(dataProductCategory)
    }
}

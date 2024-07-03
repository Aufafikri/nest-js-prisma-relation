import { Injectable } from '@nestjs/common';
import { ProductCategoryRepository } from './product-category.repository';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
    constructor(private productCategoryRepository: ProductCategoryRepository) {}

    public async createProduct(dataProductCategory: CreateProductCategoryDto) {
        return this.productCategoryRepository.createProductCategory(dataProductCategory)
    }
}

import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    public async createProduct(@Body() data: CreateProductDto) {
        return this.productService.createProduct(data)
    }
}

import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    public async createProduct(data: CreateProductDto) {
        return this.productRepository.createProduct(data)
    }

    public async findOneProduct(prdouctId: string) {
        return this.productRepository.findOneProduct(prdouctId)
    }
}

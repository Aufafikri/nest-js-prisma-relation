import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";

@Injectable()
export class ProductCategoryRepository {
    constructor(private prisma: PrismaService) {}

    public async createProductCategory(dataProductCategory: CreateProductCategoryDto) {
        return this.prisma.productCategory.create({
            data: dataProductCategory
        })
    }
}
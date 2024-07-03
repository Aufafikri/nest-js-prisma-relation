import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service";
import { createCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoryRepository {
    constructor(private prisma: PrismaService) {}
    
    public async createCategory(dataCategory: createCategoryDto) {
        return this.prisma.category.create({
            data: dataCategory
        })
    }

    public async findOneCategory(categoryId: string) {
        return this.prisma.category.findUnique({
            where: {
                id: categoryId
            },
            include: {
                Product: true,
                ProductCategory: {
                    include: {
                        Product: true
                    }
                }
            }
        })
    }
}
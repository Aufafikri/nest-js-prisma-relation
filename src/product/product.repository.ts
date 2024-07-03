import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository {
    constructor(private prisma: PrismaService) {}

    public async createProduct(data: CreateProductDto) {
        return this.prisma.product.create({
            data
        })
    }

    public async findOneProduct(id: string) {
        return this.prisma.product.findUnique({
            where: {
                id: id
            },
            include: {
                Category: true
            }
        })
    }
}
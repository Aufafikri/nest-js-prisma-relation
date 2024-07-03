import { IsString } from "class-validator";

export class CreateProductCategoryDto {
    @IsString()
    productId: string

    @IsString()
    categoryId: string
}
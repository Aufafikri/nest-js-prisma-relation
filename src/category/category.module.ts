import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';

@Module({
  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController]
})
export class CategoryModule {}

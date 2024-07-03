import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller'
import { PrismaService } from './lib/prisma.service';
import { PrismaModule } from './lib/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule, ProductModule, CategoryModule, ProductCategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}

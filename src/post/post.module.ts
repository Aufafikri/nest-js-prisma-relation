import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { PrismaModule } from 'src/lib/prisma.module';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}

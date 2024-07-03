import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Post()
    public async createPost(@Body() data: CreatePostDto) {
        return this.postService.createPost(data)
    }

    @Get('/:id')
    public async getPost(@Param("id") id: string) {
        return this.postService.getPost(id)
    }

    @Post('/:postId/user/:userId')
    public async addPostUser(@Param("postId") postId: string, @Param("userId") userId: string) {
        return this.postService.addPostUser(postId, userId)
    }
}

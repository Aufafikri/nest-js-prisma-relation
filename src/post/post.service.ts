import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(private postRepository: PostRepository) {}

    public async createPost(data: CreatePostDto) {
        return this.postRepository.create(data)
    }

    public async getPost(id: string) {
        return this.postRepository.findOne(id)
    }

    public async addPostUser(postId: string, userId: string) {
        return this.postRepository.addPostUser(postId, userId)
    }
}

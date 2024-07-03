import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "@prisma/client";

@Injectable()
export class PostRepository {
    constructor(private prisma: PrismaService) {}

    public async create(data: CreatePostDto): Promise<Post> {
        return this.prisma.post.create({
            data
        })
    }

    public async findOne(id: string) {
        return this.prisma.post.findUnique({
            where: { id },
            include: {
                UserPost: {
                    include: {
                        User: true
                    }
                }
            }
        })
    }

    public async addPostUser(postId: string, userId: string) {
        return this.prisma.userPost.create({
            data: { 
                userId,
                postId
            }
        })
    }
}
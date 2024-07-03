import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "@prisma/client";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    public async createUser(data: CreateUserDto) {
        return await this.prisma.user.create({
            data
        })
    }

    public async findOne(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
            include: { 
                Post: true,
                UserPost: {
                    include: {
                        Post: true
                    }
                }
            }
        })
    }

    public async addUserPost(userId: string, postId: string) {
        return this.prisma.userPost.create({
            data: {
                userId,
                postId
            }
        })
    }

    public async getUserPost(userId: string, postId: string) {
        return this.prisma.userPost.findUnique({
            where: {
                userId_postId: {
                    userId,
                    postId
                }
            }
        })
    }
}
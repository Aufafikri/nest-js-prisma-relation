import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    public async createUser(@Body() data: CreateUserDto) {
        return await this.userService.createUser(data)
    }

    @Get('/:id')
    public async getUser(@Param("id") id: string) {
        return this.userService.findOne(id)
    }

    @Post('/:userId/post/:postId')
    public async addUserPost(@Param("userId") userId: string, @Param("postId") postId: string) {
        return this.userService.addUserPost(userId, postId)
    }

    @Get('/:userId/post/:postId')
    public async getUserPost(@Param("userId") userId: string, @Param("postId") postId: string) {
        return this.userService.getUserPost(userId, postId)
    }
}

import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    public async createUser(data: CreateUserDto) {
        return await this.userRepository.createUser(data)
    }

    public async findOne(id: string) {
        return this.userRepository.findOne(id)
    }

    public async addUserPost(userId: string, postId: string) {
        return this.userRepository.addUserPost(userId, postId)
    }

    public async getUserPost(userId: string, postId: string) {
        return this.userRepository.getUserPost(userId, postId)
    }
}

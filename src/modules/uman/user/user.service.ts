import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}


    async getUserAreaId(userId: number) : Promise<number> {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: {
                site: {
                    area: true,
                },
            },
        });
    
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
    
        return user.site.area.id;
    }
}

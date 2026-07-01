import { RequestContext } from "@common/context/request-context";
import { User } from "@modules/uman/user/entities/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User) 
        private userRepo: Repository<User>,
    ) { }

    async login(username: string, password: string) {
        const user = await this.userRepo.findOne({
            where: { username },
            relations: ['userHasRoles', 'userHasRoles.role', 'userHasRoles.role.permissions'],
        });

        if (!user) throw new UnauthorizedException("User not found");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) { 
            throw new UnauthorizedException('Invalid credentials'); 
        }

        const permissions = user.userHasRoles
            .filter(uhr => uhr.isActive) // optional filter aktif
            .flatMap(uhr => uhr.role.permissions)
            .map(p => p.name);


        const payload : RequestContext = {
            id : user.id,
            username: user.username,
            permissions : [...new Set(permissions)]
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

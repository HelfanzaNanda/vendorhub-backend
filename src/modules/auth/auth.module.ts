import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { Menu } from '@modules/uman/menu/entities/menu.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Role, UserHasRole, Permission, Menu]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config : ConfigService) => ({
                secret: config.get<string>('JWT_SECRET'),
                signOptions: { 
                    expiresIn: config.get('JWT_EXPIRES_IN', '1d') 
                },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule { }
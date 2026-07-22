import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { File } from "@modules/master/file/entities/file.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User, File
        ]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService
    ],
    exports: [
        UserService,
    ],
})
export class UserModule {}
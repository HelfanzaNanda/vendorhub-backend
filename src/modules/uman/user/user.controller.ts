import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CurrentUser } from "@common/decorators/current-user.decorator";
import { JwtPayload } from "@modules/auth/interfaces/jwt-payload.interface";

@Controller('users')
export class UserController {

    constructor( private readonly userService: UserService, ) {}

    @Post('my/area')
    getUserArea(@CurrentUser() user: JwtPayload ) {
        return this.userService.getUserAreaId(user.sub);
    }

}
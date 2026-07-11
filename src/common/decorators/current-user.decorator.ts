import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
// }

export const CurrentUser = createParamDecorator(
    (_: unknown, ctx: ExecutionContext): JwtPayload => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new BadRequestException(
                'Current user is not associated with a user.',
            );
        }
        const {sub, ...userData} = user;
        return {
            id: sub,
            sub : sub,
            ...userData
        }
    },
);

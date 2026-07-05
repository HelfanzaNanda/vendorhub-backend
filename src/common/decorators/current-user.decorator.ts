import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface JwtUser {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    type: string;
    vendor?: {
        id: number;
        vendorStatus: {
            code: string;
            name: string;
        };
    };
}

export const CurrentUser = createParamDecorator(
    (_: unknown, ctx: ExecutionContext): JwtUser => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);

import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const CurrentUserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest();

    const sub = request.user?.sub;

    if (!sub) {
      throw new BadRequestException(
        'Current user is not associated with a user.',
      );
    }

    return sub;
  },
);
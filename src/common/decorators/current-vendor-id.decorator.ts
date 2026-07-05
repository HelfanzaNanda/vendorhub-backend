import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const CurrentVendorId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest();

    const vendorId = request.user?.user?.vendor?.id;

    if (!vendorId) {
      throw new BadRequestException(
        'Current user is not associated with a vendor.',
      );
    }

    return vendorId;
  },
);
import { AppConfig } from '@common/config/app.config';
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errorDetail: any = null;

        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();
            const res = exception.getResponse();

            if (typeof res === 'string') {
                message = res;
            } else if (
                typeof res === 'object' &&
                res !== null &&
                'message' in res
            ) {
                const messages = Array.isArray(res.message)
                    ? res.message
                    : [res.message];
                // VALIDATION ERROR
                if (statusCode === HttpStatus.BAD_REQUEST) {
                    response.status(statusCode).json({
                        status: false,
                        statusCode,
                        message: 'Validation error',
                        data: null,
                        error: this.formatValidationErrors(messages),
                        ...(AppConfig.APP_DEBUG && { debug: errorDetail }),
                    });
                    return;
                }

                message = messages.join(', ');
            }
        } else if (exception instanceof Error) {
            if (AppConfig.APP_DEBUG) {
                errorDetail = this.parseStack(
                    exception.stack,
                    exception.message,
                );
            }
        }

        response.status(statusCode).json({
            status: false,
            statusCode,
            message,
            data: null,
            ...(AppConfig.APP_DEBUG && { debug: errorDetail }),
        });
    }

    private parseStack(stack?: string, exceptionMessage?: string) {
        if (!stack) return null;
        const lines = stack.split('\n');
        const match = lines[1]?.match(/\((.*):(\d+):(\d+)\)/);

        return {
            message: exceptionMessage,
            file: match?.[1],
            line: match?.[2],
            column: match?.[3],
            stack,
        };
    }

    private formatValidationErrors(messages: string[]) {
        const errors: Record<string, string[]> = {};

        messages.forEach((msg) => {
            /**
             * Contoh msg:
             * "code must be longer than or equal to 2 characters"
             */
            const key = msg.split(' ')[0]; // code
            if (!errors[key]) {
                errors[key] = [];
            }
            errors[key].push(msg);
        });

        return errors;
    }
}

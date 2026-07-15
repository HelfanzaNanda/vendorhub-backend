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

        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errorDetail: any = null;

        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();

            const res = exception.getResponse();

            /**
             * Validation Pipe (DTO)
             */
            if (
                statusCode === HttpStatus.BAD_REQUEST &&
                typeof res === 'object' &&
                res !== null &&
                Array.isArray((res as any).message)
            ) {
                return response.status(statusCode).json({
                    status: false,
                    statusCode,
                    message: 'Validation error',
                    data: null,
                    error: this.formatValidationErrors((res as any).message),
                    ...(AppConfig.APP_DEBUG && { debug: errorDetail }),
                });
            }

            /**
             * Business Exception
             */
            if (typeof res === 'object' && res !== null) {
                return response.status(statusCode).json({
                    status: false,
                    statusCode,
                    data: null,
                    ...(res as object),
                    ...(AppConfig.APP_DEBUG && { debug: errorDetail }),
                });
            }

            /**
             * String Exception
             */
            if (typeof res === 'string') {
                message = res;
            }
        } else if (exception instanceof Error) {
            if (AppConfig.APP_DEBUG) {
                errorDetail = this.parseStack(
                    exception.stack,
                    exception.message,
                );
            }
        }

        return response.status(statusCode).json({
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
            const key = msg.split(' ')[0];

            if (!errors[key]) {
                errors[key] = [];
            }

            errors[key].push(msg);
        });

        return errors;
    }
}
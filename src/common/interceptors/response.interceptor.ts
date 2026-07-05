import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();

        let message = 'successfully';
        let status = true;
        if (response.statusCode >= 500) {
            message = 'Failed';
            status = false;
        }

        return next.handle().pipe(
            map((data) => ({
                status: status,
                statusCode: response.statusCode,
                message: message,
                data,
            })),
        );
    }
}

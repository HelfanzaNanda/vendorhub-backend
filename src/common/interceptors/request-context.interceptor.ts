import { RequestContext } from '@common/context/request-context';
import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RequestContextInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const userId = req.user?.sub || req.user?.id;

        return new Observable((subscriber) => {
            RequestContext.run({ userId }, () => {
                next.handle().subscribe({
                    next: (val) => subscriber.next(val),
                    error: (err) => subscriber.error(err),
                    complete: () => subscriber.complete(),
                });
            });
        });
    }
}

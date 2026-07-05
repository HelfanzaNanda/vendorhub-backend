import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { AllExceptionsFilter } from '@common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { RequestContextInterceptor } from '@common/interceptors/request-context.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(
        new RequestContextInterceptor(),
        new ResponseInterceptor(),
    );
    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    await app.listen(process.env.PORT ?? 8000);
}
bootstrap();

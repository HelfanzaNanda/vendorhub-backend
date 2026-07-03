import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import 'dotenv/config';
import { AuthModule } from '@modules/auth/auth.module';
import { CountryModule } from '@modules/master/country/country.module';
import { AuditSubscriber } from '@common/subscribers/audit.subscriber';
import { SiteModule } from '@modules/master/site/site.module';
import { LookupModule } from '@modules/lookup/lookup.module';
import { TermsConditionModule } from '@modules/master/terms-condition/term-condition.module';



@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory : (config : ConfigService) => ({
                type: config.get<'mariadb'>('DATABASE_TYPE'),
                host: config.get<string>('DATABASE_HOST'),
                port: config.get<number>('DATABASE_PORT'),
                username: config.get<string>('DATABASE_USER'),
                password: config.get<string>('DATABASE_PASSWORD'),
                database: config.get<string>('DATABASE_DB'),
                autoLoadEntities: true,
                synchronize: true, // jangan di production
                subscribers: [AuditSubscriber]
            }),
        }),

        AuthModule, 
        CountryModule,
        SiteModule,
        LookupModule,
        TermsConditionModule
    ],
    controllers: [
        AppController,
    ],
    providers: [AppService],
})
export class AppModule { }

import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
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
import { VendorModule } from '@modules/vendor/vendor.module';
import { WorkflowModule } from '@modules/master/workflow/workflow.module';
import { WorkflowStepModule } from '@modules/master/workflow-step/workflow-step.module';
import { WorkflowStepAssignmentModule } from '@modules/master/workflow-step-assignment/workflow-step-assignment.module';
import { HolidayModule } from '@modules/master/holiday/holiday.module';
import { WorkingCalendarModule } from '@modules/master/working-calendar/working-calendar.module';
import { WorkflowTransactionModule } from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';
import { WorkflowTransactionStepModule } from '@modules/workflow-transaction/workflow-transaction-step/workflow-transaction-step.module';
import { WorkflowHistoryModule } from '@modules/workflow-transaction/workflow-history/workflow-history.module';
import { WorklistModule } from '@modules/worklist/worklist.module';
import { VendorCategoryModule } from '@modules/master/vendor-category/vendor-category.module';
import { FileModule } from '@modules/master/file/file.module';
import { NotificationModule } from '@modules/notification/notification.module';
import { OtpModule } from '@modules/otp/otp.module';
import { IdentityModule } from '@modules/identity/identity.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: config.get<'mariadb'>('DATABASE_TYPE'),
                host: config.get<string>('DATABASE_HOST'),
                port: config.get<number>('DATABASE_PORT'),
                username: config.get<string>('DATABASE_USER'),
                password: config.get<string>('DATABASE_PASSWORD'),
                database: config.get<string>('DATABASE_DB'),
                autoLoadEntities: true,
                synchronize: true, // jangan di production
                subscribers: [AuditSubscriber],
            }),
        }),

        AuthModule,
        CountryModule,
        SiteModule,
        LookupModule,
        FileModule,
        OtpModule,
        NotificationModule,
        VendorCategoryModule,
        TermsConditionModule,
        VendorModule,
        WorkflowModule,
        WorkflowStepModule,
        WorkflowStepAssignmentModule,
        HolidayModule,
        WorkingCalendarModule,
        WorkflowTransactionModule,
        WorkflowTransactionStepModule,
        WorkflowHistoryModule,
        WorklistModule,
        IdentityModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

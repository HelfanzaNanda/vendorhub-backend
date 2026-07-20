import { DataSource } from "typeorm";
import { NotificationTemplate } from "@modules/notification/entities/notification-template.entity";
import { readFileSync } from "fs";
import { resolve } from "path";
import { NotificationChannel, NotificationCode } from "@common/enums/notification.enum";
import { Notification } from "@modules/notification/entities/notification.entity";

export async function seedNotification(dataSource: DataSource) {
    const repo = dataSource.getRepository(NotificationTemplate);
    const NotificationRepo = dataSource.getRepository(Notification);

    const templates = [
        {
            code: 'SIGNIN_OTP',
            subject: 'Account Sign-In OTP Code',
            content: readFileSync(resolve(__dirname, 'templates/SIGNIN_OTP/email.html'), 'utf-8'),
        },
        {
            code: 'USER_ACCESS_OTP',
            subject: 'User Access OTP Code',
            content: readFileSync(resolve(__dirname, 'templates/USER_ACCESS_OTP/email.html'), 'utf-8'),
            // text: readFileSync(resolve(__dirname, 'templates/USER_ACCESS_OTP/email.txt'), 'utf-8'),
        },
        {
            code: 'VENDOR_REGISTRATION_INTERNAL',
            subject: 'Vendor Registration Submitted',
            content: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_INTERNAL/email.html'), 'utf-8'),
            // text: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_INTERNAL/email.txt'), 'utf-8'),
        },
        {
            code: 'VENDOR_REGISTRATION_EXTERNAL',
            subject: 'Vendor Registration Submitted',
            content: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_EXTERNAL/email.html'), 'utf-8'),
            // text: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_EXTERNAL/email.txt'), 'utf-8'),
        }
        // {
        //     code: 'VENDOR_REGISTRATION_APPROVED',
        //     subject: 'Vendor Registration Approved',
        //     content: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_APPROVED/email.html'), 'utf-8'),
        //     text: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_APPROVED/email.txt'), 'utf-8'),
        // },
        // {
        //     code: 'VENDOR_REGISTRATION_REJECTED',
        //     subject: 'Vendor Registration Rejected',
        //     content: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_REJECTED/email.html'), 'utf-8'),
        //     text: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_REJECTED/email.txt'), 'utf-8'),
        // },
        // {
        //     code: 'VENDOR_REGISTRATION_REVISED',
        //     subject: 'Vendor Registration Revised',
        //     content: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_REVISED/email.html'), 'utf-8'),
        //     text: readFileSync(resolve(__dirname, 'templates/VENDOR_REGISTRATION_REVISED/email.txt'), 'utf-8'),
        // },
    ];

    const codes = Object.values(NotificationCode);

    for (const code of codes) {
        const existingNotification = await NotificationRepo.findOne({
            where: {
                code: code,
            },
        });

        if (!existingNotification) {
            await NotificationRepo.save(NotificationRepo.create({
                code,
                name: code,
                isActive: true,
            }));
        }
    }

    for (const template of templates) {
        const notification = await NotificationRepo.findOne({
            where: {
                code: template.code,
            },
        });

        if (!notification) {
            console.warn(`Notification not found for code: ${template.code}`);
            continue;
        }

        const existing = await repo.findOne({
            where: {
                notification: notification,
            },
        });

        if (existing) {
            console.log(`Notification template for code ${template.code} already exists`);
            continue;
        }

        const { code, ...data } = template;

        await repo.save({
            notification: notification,
            channel: NotificationChannel.EMAIL,
            title : data.subject,
            isActive: true,
            ...data,

        });
    }
    console.log('✅ Notification seeded');
}
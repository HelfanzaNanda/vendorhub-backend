import { NotificationChannel } from "@common/enums/notification.enum";

export class NotificationUtil {

    static isEmail(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.EMAIL;
    }

    static isSms(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.SMS;
    }

    static isPush(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.PUSH;
    }

    static isBell(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.BELL;
    }

    static isWhatsapp(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.WHATSAPP;
    }

    static isTelegram(channel: NotificationChannel): boolean {
        return channel === NotificationChannel.TELEGRAM;
    }

    static normalizeRecipients(recipients: string | string[]): string[] {
        if (Array.isArray(recipients)) {
            return recipients;
        }
        return [recipients];
    }

    static supportSubject(channel: NotificationChannel): boolean {
        return [NotificationChannel.EMAIL].includes(channel);
    }

    static supportTitle(channel: NotificationChannel): boolean {
        return [
            NotificationChannel.BELL,
            NotificationChannel.PUSH,
        ].includes(channel);
    }

}
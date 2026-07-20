import { Injectable } from "@nestjs/common";
import nodemailer from "nodemailer";
import { NotificationTemplateDto } from "../dto/notification-template.dto";
import { MailConfig } from "@common/config/mail.config";

@Injectable()
export class EmailProvider {

    private readonly config = MailConfig;

    private transporter = nodemailer.createTransport({
        host: this.config.host,
        port: this.config.port,
        secure: false,
        auth: {
            user: this.config.username,
            pass: this.config.password,
        },
    });

    async send( recipient: string, template: NotificationTemplateDto, ) {
        await this.transporter.sendMail({
            from: this.config.from,
            to: recipient,
            subject: template.subject,
            html: template.content,
        });
    }
}
export const MailConfig = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM,
};
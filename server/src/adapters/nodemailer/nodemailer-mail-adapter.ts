import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adpter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "eaa8c24320cbfd",
      pass: "45781d8c5a333d"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Arthur Carvalho <arthur.demario@gmail.com>',
            subject,
            html: body,
    });
    }
}
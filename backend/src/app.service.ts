import { Injectable } from '@nestjs/common';
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendTestMail(): Promise<string> {
    const mailConfig = {
      from: "karel.skarpa@db-secret.yaml.com",
      to: "horst.jodler.schnitzel@gmail.com",
      subject: "TEST",
      template: "./text",
      context: {
        text: "Nazdar"
      }
    }

    try {
      const info = await this.mailerService.sendMail(mailConfig);
      return "Email sent success: " + info.response;
    } catch (e) {
      console.log(e);
    }
  }
}

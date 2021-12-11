import {Injectable, NotFoundException} from '@nestjs/common';
import { Mail } from './mail.model';
import { MailerService } from '@nestjs-modules/mailer';
import { IMailSendDTO, MailSendDTO } from './dto/MailSend';
import { MailDTO } from './dto/mailDTO';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prismaService: PrismaService,
  ) {}

  async getTest(): Promise<string> {
    const values = await Promise.all([
      'TEST mail service',
      new Promise((resolve) => setTimeout(resolve, 500, 'Timeout test')),
    ]);
    return values.join();
  }

  async sendMail(mailBody: MailDTO): Promise<MailSendDTO> {
    try {
      const res = await this.mailerService.sendMail({
        ...mailBody,
        html: `<p>${mailBody.text}</p>`,
      });

      const mes = await this.prismaService.mail.create({ data: mailBody });

      return {
        message: `Email sent success: ${res.response}.`,
        dbMessage: mes,
      };
    } catch (e) {
      return {
        message: `Email was not send. Something went wrong... ${e}`,
      };
    }
  }

  async getAllMails(): Promise<Mail[]> {
    try {
      return await this.prismaService.mail.findMany();
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
}

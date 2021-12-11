import {Global, Module} from '@nestjs/common';
import { MailService } from './mail.service';
import { MailResolver } from './mail.resolver';
import {PrismaService} from "../prisma.service";
import {MailerModule} from "@nestjs-modules/mailer";
import {ConfigService} from "@nestjs/config";
import {mailerConfig} from "../config/mailer.config";

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: mailerConfig,
      inject: [ConfigService]
    }),
  ],
  providers: [MailService, MailResolver, PrismaService]
})
export class MailModule {}


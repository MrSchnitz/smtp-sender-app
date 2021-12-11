import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {ConfigService} from "@nestjs/config";

export const mailerConfig = async (config: ConfigService) => ({
  transport: {
    host: config.get('MAIL_HOST'),
    port: 587,
    secure: false,
    auth: {
      user: config.get('MAIL_USER'),
      pass: config.get('MAIL_PASSWORD'),
    },
  },
  defaults: {
    from: '"No Reply" <noreply@example.com>',
  },
  template: {
    dir: join(__dirname, './../templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
});

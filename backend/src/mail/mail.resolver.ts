import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Mail} from "./mail.model";
import {MailService} from "./mail.service";
import {GraphQLString} from "graphql";
import {MailSendDTO} from "./dto/MailSend";
import {MailDTO} from "./dto/mailDTO";

@Resolver(of => Mail)
export class MailResolver {
    constructor(
        private mailService: MailService
    ) {}

    @Query(returns => [Mail])
    async mails(): Promise<Mail[]> {
        return this.mailService.getAllMails();
    }

    @Query(returns => GraphQLString)
    async test(): Promise<string> {
        return this.mailService.getTest();
    }

    @Mutation(returns => MailSendDTO)
    async sendMail(@Args("mail") mailBody: MailDTO): Promise<MailSendDTO> {
        return this.mailService.sendMail(mailBody);
    }
}

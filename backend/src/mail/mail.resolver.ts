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
    async mails(@Args("userId") userId: string): Promise<Mail[]> {
        return this.mailService.getUserMails(userId);
    }

    @Query(returns => GraphQLString)
    async test(): Promise<string> {
        return this.mailService.getTest();
    }

    @Mutation(returns => MailSendDTO)
    async sendMail(@Args("mail") mailBody: MailDTO): Promise<MailSendDTO> {
        console.log("HMMMM", mailBody)
        return this.mailService.sendMail(mailBody);
    }
}

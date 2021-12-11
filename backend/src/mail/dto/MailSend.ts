import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {Mail} from "../mail.model";

export interface IMailSendDTO {
    message: string;
}

@ObjectType()
export class MailSendDTO implements IMailSendDTO {
    @Field()
    message: string;

    @Field({nullable: true})
    dbMessage?: Mail;
}

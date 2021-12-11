import {Field, ID, InputType} from "@nestjs/graphql";

@InputType()
export class MailDTO {
    @Field()
    from: string;

    @Field()
    to: string;

    @Field()
    subject: string;

    @Field()
    text: string;
}

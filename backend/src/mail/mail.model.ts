import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType({description: "Mail message model"})
export class Mail {
    @Field(type => ID)
    id: string;

    @Field()
    from: string;

    @Field()
    to: string;

    @Field()
    subject: string;

    @Field()
    text: string;

    @Field()
    userId: string;
}

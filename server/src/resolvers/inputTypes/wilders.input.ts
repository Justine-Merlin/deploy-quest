import { InputType, Field } from "type-graphql";

@InputType()
export class WilderInput {
  @Field()
  name: String;

  @Field()
  city: String;
}

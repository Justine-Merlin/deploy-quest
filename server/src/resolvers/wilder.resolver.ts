import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Wilder, WilderModel } from "../entities/wilder.entity";
import { WilderInput } from "./inputTypes/wilders.input";

@Resolver()
export class WilderResolver {
  @Query(() => [Wilder])
  async wilders() {
    return await WilderModel.find();
  }

  @Mutation(() => Wilder)
  async addWilder(@Arg("wilder") { name, city }: WilderInput) {
    return await WilderModel.create({ name, city });
  }
}

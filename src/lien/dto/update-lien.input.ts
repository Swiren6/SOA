import { CreateLinkInput } from './create-lien.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLienInput extends PartialType(CreateLinkInput) {
  @Field(() => Int)
  id: number;
}

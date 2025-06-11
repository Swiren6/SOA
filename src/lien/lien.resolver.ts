import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Lien } from './entities/lien.entity';
import { CreateLinkInput } from './dto/create-lien.input';
import { UpdateLienInput } from './dto/update-lien.input';
import { LienService } from './lien.service';

@Resolver(() => Lien)
export class LinkResolver {
  constructor(private readonly linkService: LienService) {}

  @Query(() => [Lien])
  async liens(): Promise<Lien[]> {
    return this.linkService.findAll();
  }

  @Query(() => Lien, { nullable: true })
  async lien(@Args('id', { type: () => Int }) id: number): Promise<Lien> {
    return this.linkService.findOne(id);
  }

  @Mutation(() => Lien)
  async createLien(
    @Args('createLinkInput') createLinkInput: CreateLinkInput,
  ): Promise<Lien> {
    return this.linkService.create(createLinkInput);
  }

  @Mutation(() => Lien)
  async updateLien(
    @Args('updateLinkInput') updateLinkInput: UpdateLienInput,
  ): Promise<Lien> {
    return this.linkService.update(updateLinkInput.id, updateLinkInput);
  }

  @Mutation(() => Lien)
  async removeLien(@Args('id', { type: () => Int }) id: number): Promise<Lien> {
    return this.linkService.remove(id);
  }
}
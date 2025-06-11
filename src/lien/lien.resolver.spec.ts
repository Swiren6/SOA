import { Test, TestingModule } from '@nestjs/testing';
import { LinkResolver } from './lien.resolver';
import { LienService } from './lien.service';

describe('LinkResolver', () => {
  let resolver: LinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkResolver, LienService],
    }).compile();

    resolver = module.get<LinkResolver>(LinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';      
import { LienService } from './lien.service';
import { LinkResolver } from './lien.resolver';
import { Lien } from './entities/lien.entity';       
@Module({
  imports: [TypeOrmModule.forFeature([Lien])],      
  providers: [LinkResolver, LienService],
})
export class LienModule {}

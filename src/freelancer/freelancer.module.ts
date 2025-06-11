import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';   // <-- import manquant
import { FreelancerService } from './freelancer.service';
import { FreelancerResolver } from './freelancer.resolver';
import { Freelancer } from './entities/freelancer.entity';  // <-- import entité

@Module({
  imports: [TypeOrmModule.forFeature([Freelancer])],   // <-- absolument nécessaire
  providers: [FreelancerResolver, FreelancerService],
})
export class FreelancerModule {}

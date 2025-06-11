import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Freelancer } from '../../freelancer/entities/freelancer.entity';

@ObjectType()
@Entity()
export class Lien {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  titre: string;

  @Column()
  @Field()
  url: string;

  @ManyToOne(() => Freelancer, (freelancer) => freelancer.liens)
  @Field(() => Freelancer)
  freelancer: Freelancer;
} 
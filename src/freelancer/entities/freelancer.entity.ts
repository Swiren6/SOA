import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Competence } from '../../competence/competence.entity';
import { Lien } from '../../lien/entities/lien.entity';

@ObjectType()
@Entity()
export class Freelancer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  fullName: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phone?: string;

  @OneToMany(() => Competence, c => c.freelancer)
  @Field(() => [Competence], { nullable: true })
  competences?: Competence[];

  @OneToMany(() => Lien, l => l.freelancer)
  @Field(() => [Lien], { nullable: true })
  liens?: Lien[];

  
} 
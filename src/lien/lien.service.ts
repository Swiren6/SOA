import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lien } from './entities/lien.entity';
import { CreateLinkInput } from './dto/create-lien.input';
import { UpdateLienInput } from '../lien/dto/update-lien.input';

@Injectable()
export class LienService {
  constructor(
    @InjectRepository(Lien)
    private linkRepository: Repository<Lien>,
  ) {}

  async create(createLinkInput: CreateLinkInput): Promise<Lien> {
    const link = this.linkRepository.create(createLinkInput);
    return this.linkRepository.save(link);
  }

  async findAll(): Promise<Lien[]> {
    return this.linkRepository.find({
      relations: ['freelancer'],
    });
  }

  async findOne(id: number): Promise<Lien> {
    const link = await this.linkRepository.findOne({
      where: { id },
      relations: ['freelancer'],
    });
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return link;
  }

  async update(id: number, updateLinkInput: UpdateLienInput): Promise<Lien> {
    const link = await this.findOne(id);
    Object.assign(link, updateLinkInput);
    return this.linkRepository.save(link);
  }

  async remove(id: number): Promise<Lien> {
    const link = await this.findOne(id);
    return this.linkRepository.remove(link);
  }
}

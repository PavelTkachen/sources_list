import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tab } from '../model/tab.entity';
import { Repository, UpdateResult } from 'typeorm';
import { TabDTO } from './tab.dto';

@Injectable()
export class TabService {
  constructor(@InjectRepository(Tab) private readonly repo: Repository<Tab>) { }
  public async getAll(): Promise<TabDTO[]> {
    return await this.repo.find()
      .then(items => items.map(item => TabDTO.fromEntity(item)));
  }

  public async create(dto: TabDTO): Promise<TabDTO> {
    return this.repo.save(dto.toEntity())
      .then(item => TabDTO.fromEntity(item))
  }

  public async update(dto: TabDTO): Promise<UpdateResult> {
    return this.repo.update(dto.id, dto.toEntity())
      .then(item => item)
  }

  public async remove(id: string): Promise<void> {
    return this.repo.delete(id)
      .then(() => {
        return;
      })
  }
}

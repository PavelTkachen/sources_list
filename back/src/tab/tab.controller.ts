import { Body, Controller, Delete, Get, Query, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { TabDTO } from './tab.dto';
import { TabService } from './tab.service';

@Controller('tab')
export class TabController {

  constructor(private serv: TabService) {
  }
  @Get()
  public async getAll(): Promise<TabDTO[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async create(@Body() dto: TabDTO): Promise<TabDTO> {
    const tab = TabDTO.from(dto);
    return await this.serv.create(tab);
  }

  @Delete()
  public async remove(@Query() { id }: { id: string }): Promise<void> {
    await this.serv.remove(id)
  }

  @Put()
  public async update(@Body() dto: TabDTO): Promise<UpdateResult> {
    const tab = TabDTO.from(dto);
    return await this.serv.update(tab);
  }
}

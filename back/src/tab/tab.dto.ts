import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Tab } from '../model/tab.entity';
export class TabDTO implements Readonly<TabDTO> {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  id: number

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string

  public static from(dto: Partial<TabDTO>) {
    const it = new TabDTO();
    it.id = dto.id || 0;
    it.name = dto.name || "";
    return it
  }

  public static fromEntity(entity: Tab) {
    return this.from({
      id: entity.id,
      name: entity.name,
    });
  }

  public toEntity() {
    const it = new Tab();
    it.id = this.id;
    it.name = this.name;
    return it;
  }
}
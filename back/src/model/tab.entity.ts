import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'tab' })
export class Tab extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string
}
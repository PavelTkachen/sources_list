import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tab } from "../model/tab.entity";
import { TabController } from "./tab.controller";
import { TabService } from "./tab.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tab])],
  providers: [TabService],
  controllers: [TabController],
  exports: []
})
export class TabModule { };
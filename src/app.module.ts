import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarteModule } from "./carte/carte.module";

@Module({
  imports: [CarteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { ConsoleLogger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.MODE === "DEV") app.use(morgan("common"));
  await app.listen(3000);
}
bootstrap();

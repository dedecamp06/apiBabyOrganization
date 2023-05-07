import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControlBabyModule } from './control-baby/control-baby.module';

@Module({
  imports: [ControlBabyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { ControlBabyModule } from './modules/control-baby/control-baby.module';

@Module({
  imports: [ControlBabyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

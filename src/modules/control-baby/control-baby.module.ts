import { Module } from '@nestjs/common';
import { ControlBabyService } from './control-baby.service';
import { ControlBabyController } from './control-baby.controller';

@Module({
  controllers: [ControlBabyController],
  providers: [ControlBabyService]
})
export class ControlBabyModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { ControlBabyController } from './control-baby.controller';
import { ControlBabyService } from './control-baby.service';

describe('ControlBabyController', () => {
  let controller: ControlBabyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlBabyController],
      providers: [ControlBabyService],
    }).compile();

    controller = module.get<ControlBabyController>(ControlBabyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

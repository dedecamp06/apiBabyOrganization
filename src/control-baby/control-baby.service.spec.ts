import { Test, TestingModule } from '@nestjs/testing';
import { ControlBabyService } from './control-baby.service';

describe('ControlBabyService', () => {
  let service: ControlBabyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControlBabyService],
    }).compile();

    service = module.get<ControlBabyService>(ControlBabyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

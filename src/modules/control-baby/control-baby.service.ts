import { Injectable } from '@nestjs/common';
import { CreateControlBabyDto } from './dto/create-control-baby.dto';
import { UpdateControlBabyDto } from './dto/update-control-baby.dto';

@Injectable()
export class ControlBabyService {
  create(createControlBabyDto: CreateControlBabyDto) {
    return 'This action adds a new controlBaby';
  }

  findAll() {
    return `This action returns all controlBaby`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlBaby`;
  }

  update(id: number, updateControlBabyDto: UpdateControlBabyDto) {
    return `This action updates a #${id} controlBaby`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlBaby`;
  }
}

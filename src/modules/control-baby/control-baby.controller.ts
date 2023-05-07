import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlBabyService } from './control-baby.service';
import { CreateControlBabyDto } from './dto/create-control-baby.dto';
import { UpdateControlBabyDto } from './dto/update-control-baby.dto';

@Controller('control-baby')
export class ControlBabyController {
  constructor(private readonly controlBabyService: ControlBabyService) {}

  @Post()
  create(@Body() createControlBabyDto: CreateControlBabyDto) {
    return this.controlBabyService.create(createControlBabyDto);
  }

  @Get()
  findAll() {
    return this.controlBabyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlBabyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlBabyDto: UpdateControlBabyDto) {
    return this.controlBabyService.update(+id, updateControlBabyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlBabyService.remove(+id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateControlBabyDto } from './create-control-baby.dto';

export class UpdateControlBabyDto extends PartialType(CreateControlBabyDto) {}

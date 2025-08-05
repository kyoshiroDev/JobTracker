import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnoncesDto } from './create-annonces.dto';

export class UpdateAnnoncesDto extends PartialType(CreateAnnoncesDto) {}

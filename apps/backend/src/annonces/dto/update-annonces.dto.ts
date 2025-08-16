import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnonceDto } from './create-annonces.dto';

export class UpdateAnnoncesDto extends PartialType(CreateAnnonceDto) {}

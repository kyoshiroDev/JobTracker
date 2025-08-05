import { Injectable } from '@nestjs/common';
import { CreateAnnoncesDto } from './dto/create-annonces.dto';
import { UpdateAnnoncesDto } from './dto/update-annonces.dto';

@Injectable()
export class AnnoncesService {
  create(createAnnonceDto: CreateAnnoncesDto) {
    return 'This action adds a new annonces';
  }

  findAll() {
    return `This action returns all annonce`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annonce`;
  }

  update(id: number, updateAnnonceDto: UpdateAnnoncesDto) {
    return `This action updates a #${id} annonce`;
  }

  remove(id: number) {
    return `This action removes a #${id} annonce`;
  }
}

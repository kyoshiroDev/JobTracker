import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonceDto } from '@libs/dto';
import { UpdateAnnoncesDto } from '@libs/dto';

@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annonceService: AnnoncesService) {}

  @Post()
  create(@Body() createAnnonceDto: CreateAnnonceDto) {
    const UserId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    return this.annonceService.create(createAnnonceDto, UserId);
  }

  @Get()
  findAll() {
    return this.annonceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annonceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnonceDto: UpdateAnnoncesDto) {
    return this.annonceService.update(id, updateAnnonceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annonceService.remove(id);
  }
}

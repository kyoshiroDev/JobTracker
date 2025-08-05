import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnnoncesService } from './annonces.service';
import { CreateAnnoncesDto } from './dto/create-annonces.dto';
import { UpdateAnnoncesDto } from './dto/update-annonces.dto';

@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annonceService: AnnoncesService) {}

  @Post()
  create(@Body() createAnnonceDto: CreateAnnoncesDto) {
    return this.annonceService.create(createAnnonceDto);
  }

  @Get()
  findAll() {
    return this.annonceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annonceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnonceDto: UpdateAnnoncesDto) {
    return this.annonceService.update(+id, updateAnnonceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annonceService.remove(+id);
  }
}

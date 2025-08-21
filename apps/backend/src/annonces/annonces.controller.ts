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
import type { CreateAnnonce, UpdateAnnonceDto} from '@libs/schemas-zod';
import { createAnnonceSchema, updateAnnonceSchema } from '@libs/schemas-zod';
@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annonceService: AnnoncesService) {}


  @Post()
  create(@Body() body: unknown) {
    const annonce:CreateAnnonce = createAnnonceSchema.parse(body);
    return this.annonceService.create(annonce);
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
  update(@Param('id') id: string, @Body() body: UpdateAnnonceDto) {
    const annonce = updateAnnonceSchema.parse(body);
    return this.annonceService.update(id, annonce);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annonceService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnnonce, UpdateAnnonceDto } from '@libs/schemas-zod';

@Injectable()
export class AnnoncesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(annonce: CreateAnnonce) {
    return this.prisma.annonce.create({
      data: { ...annonce },
    });
  }

  async findAll() {
    return this.prisma.annonce.findMany({
      include: {
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.annonce.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, annonce: UpdateAnnonceDto) {
    return this.prisma.annonce.update({
      where: { id },
      data: annonce,
    });
  }

  async remove(id: string) {
    return this.prisma.annonce.delete({
      where: { id },
    });
  }
}

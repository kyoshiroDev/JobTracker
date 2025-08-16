import { Injectable } from '@nestjs/common';
import { CreateAnnonceDto, UpdateAnnoncesDto } from '@libs/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnnoncesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAnnonceDto: CreateAnnonceDto, UserId: string) {
    return this.prisma.annonce.create({
      data: {
        job: createAnnonceDto.job,
        contract_type: createAnnonceDto.contract_type,
        work_mode: createAnnonceDto.work_mode,
        status: createAnnonceDto.status,
        about: createAnnonceDto.about,
        description: createAnnonceDto.description,
        skills: createAnnonceDto.skills,
        benefits: createAnnonceDto.benefits,
        salary: createAnnonceDto.salary,
        annonce_link: createAnnonceDto.annonce_link,
        company_name: createAnnonceDto.company_name,
        company_city: createAnnonceDto.company_city,
        company_phone: createAnnonceDto.company_phone,
        company_email: createAnnonceDto.company_email,
        user: {
          connect: {
            id: UserId,
          },
        },
      },
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

  async update(id: string, updateAnnonceDto: UpdateAnnoncesDto) {
    return this.prisma.annonce.update({
      where: { id },
      data: updateAnnonceDto,
    });
  }

  async remove(id: string) {
    return this.prisma.annonce.delete({
      where: { id },
    });
  }
}

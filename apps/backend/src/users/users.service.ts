import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../../../../libs/dto/create-users.dto';
import { UpdateUsersDto } from '../../../../libs/dto/update-users.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(User: CreateUsersDto){
    const saltOrRounds = 10;
    const password: string = User.password;
    const hash: string = await bcrypt.hash(password, saltOrRounds);

    return this.prisma.user.create({
      data:{
        name: User.name,
        email: User.email,
        password: hash,
        created_at: User.createdAt
      }
    })
  }

  findOne(email: string) {
    return this.prisma.user.findFirst({
      where: {email}
    });
  }

  update(id: string, updateUserDto: UpdateUsersDto) {
    return this.prisma.user.update({
      where: { id }, data: updateUserDto
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}

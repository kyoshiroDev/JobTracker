import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
  CreateUser,
  JwtTokens,
  UpdateUser,
  UserPublic,
} from '@libs/schemas-zod';
import { TokenService } from '../auth/jwt-token/token.service';

@Injectable()
export class UsersService {
  constructor(private readonly _prisma: PrismaService, private readonly _tokens: TokenService) {}

  async register(user: CreateUser) {
    const saltOrRounds: number = 10;
    const password: string = user.password;
    const hash: string = await bcrypt.hash(password, saltOrRounds);

    const createdUser: UserPublic = await this._prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hash,
        created_at: user.createdAt,
      }
    })

    const tokens: JwtTokens  = await this._tokens.issueForUser(createdUser.id);
    return { user: createdUser, tokens };
  }

  findOne(email: string) {
    return this._prisma.user.findFirst({
      where: { email },
    });
  }

  update(id: string, updateUserDto: UpdateUser) {
    return this._prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this._prisma.user.delete({
      where: { id },
    });
  }
}

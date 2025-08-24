import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
  CreateUser,
  createUserSchema,
  JwtTokens,
  UpdateUser,
  UserPublic,
} from '@libs/schemas-zod';
import { TokenService } from '../auth/jwt-token/token.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly _prisma: PrismaService,
    private readonly _tokens: TokenService
  ) {}

  async register(
    payload: CreateUser
  ): Promise<{ user: UserPublic; tokens: JwtTokens }> {
    const { email, username, password } = createUserSchema.parse(payload);
    const existedUser = await this._prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
      select: {
        id: true,
      },
    });
    if (existedUser) {
      throw new ConflictException(
        "L'email ou le nom d'utilisateur existe déjà"
      );
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this._prisma.user.create({
      data: { username, email, password: passwordHash },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    const tokens: JwtTokens = await this._tokens.issueForUser(user.id);
    return { user, tokens };
  }

  findOne(email: string) {
    return this._prisma.user.findFirst({
      where: { OR: [{ email }, { username: email }] },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
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

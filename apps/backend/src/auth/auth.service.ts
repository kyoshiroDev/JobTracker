import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import {
  AuthResponse,
  LoginUser,
  UserModel,
  UserPublic,
  UserPublicModelSchema,
} from '@libs/schemas-zod';
import { TokenService } from './jwt-token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly token: TokenService,
  ) {}

  async login(userSession: LoginUser): Promise<AuthResponse> {
    const user = await this.usersService.findOne(userSession.email);
    if (!user) throw new UnauthorizedException('Utilisateur introuvable');

    const isPasswordValid = await bcrypt.compare(
      userSession.password,
      user.password
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Mot de passe invalide');

    const userPublic: UserPublic = UserPublicModelSchema.parse(user);
    const tokens = await this.token.issueForUser(user.id);
    return { user: userPublic, tokens };
  }
}

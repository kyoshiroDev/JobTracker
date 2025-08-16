import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

import { JwtService } from '@nestjs/jwt';
import { UserSignInDto } from '@libs/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(userSession: UserSignInDto) {
    const user = await this.usersService.findOne(userSession.email);
    if (!user) throw new UnauthorizedException('Utilisateur introuvable');

    const isPasswordValid = await bcrypt.compare(
      userSession.password,
      user.password
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Mot de passe invalide');

    const payload = { sub: user.id, email: user.email };
    const access = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
    });
    const refresh = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      tokens: {
        access,
        refresh,
        expires_in: 15 * 60,
        token_type: 'Bearer',
      },
    };
  }
}

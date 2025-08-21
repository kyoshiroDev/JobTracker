import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtTokensModel } from '@libs/schemas-zod';

export type TokenDurations = { access: string; refresh: string };

@Injectable()
export class TokenService {
  constructor(
    private readonly jwt: JwtService,
    @Inject('TOKEN_DURATIONS') private readonly durations: TokenDurations,
  ) {}

  async issueForUser(userId: string) {
    const payload = { sub: userId };

    const [access, refresh] = await Promise.all([
      this.jwt.signAsync(payload, { expiresIn: this.durations.access }),
      this.jwt.signAsync({ ...payload, type: 'refresh' }, { expiresIn: this.durations.refresh }),
    ]);

    return JwtTokensModel.parse({
      access,
      refresh,
      expires_in: toSeconds(this.durations.access), // 15m -> 900
      token_type: 'Bearer',
    });
  }
}

function toSeconds(d: string) {
  const m = /^(\d+)([smhd])$/.exec(d);
  if (!m) return 900;
  const n = Number(m[1]);
  const u = m[2];
  return n * (u === 's' ? 1 : u === 'm' ? 60 : u === 'h' ? 3600 : 86400);
}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService, TokenDurations } from './token.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        secret: cfg.get<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    TokenService,
    {
      provide: 'TOKEN_DURATIONS',
      useFactory: (cfg: ConfigService): TokenDurations => ({
        access: cfg.get('JWT_ACCESS_TTL') ?? '15m',
        refresh: cfg.get('JWT_REFRESH_TTL') ?? '30d',
      }),
      inject: [ConfigService],
    },
  ],
  exports: [TokenService],
})
export class TokenModule {}

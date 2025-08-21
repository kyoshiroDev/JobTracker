import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { TokenModule } from './jwt-token/token.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PassportModule,
    TokenModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

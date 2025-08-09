import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';

@Module({
  imports: [PrismaModule, UsersModule, PassportModule, JwtModule.register({
    secret: process.env['JWT_SECRET'],
    signOptions: {
      expiresIn: '60m',
    }
  })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenModule } from '../auth/jwt-token/token.module';

@Module({
  imports: [PrismaModule, TokenModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

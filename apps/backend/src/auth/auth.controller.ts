import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUsersDto } from '@libs/dto';
import { UpdateUsersDto } from '@libs/dto';
import { AuthService } from './auth.service';
import { UserSignInDto } from '@libs/dto';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  signIn(@Body() userSession: UserSignInDto) {
    return this.authService.signIn(userSession);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('signup')
  async signup(@Body() User: CreateUsersDto) {
    return this.usersService.create(User);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() User: UpdateUsersDto) {
    return this.usersService.update(id, User);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

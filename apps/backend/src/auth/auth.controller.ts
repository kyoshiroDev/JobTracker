import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { z } from 'zod';
import { createUserSchema, loginUserSchema, updateUserSchema, userModelSchema } from '@libs/schemas-zod';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body(new ZodValidationPipe(loginUserSchema))
    user: z.infer<typeof loginUserSchema>
  ) {
    return this.authService.login(user);
  }

  @Get(':id')
  findOne(
    @Param(new ZodValidationPipe(userModelSchema))
    params: z.infer<typeof userModelSchema>
  ) {
    return this.usersService.findOne(params.id);
  }

  @Post('register')
  async register(
    @Body(new ZodValidationPipe(createUserSchema))
    body: z.infer<typeof createUserSchema>
  ) {
    return this.usersService.register(body);
  }

  @Patch(':id')
  update(
    @Param('id')
    @Body(new ZodValidationPipe(updateUserSchema))
    user: z.infer<typeof updateUserSchema>
  ) {
    return this.usersService.update(user.id, user);
  }

  @Delete(':id')
  remove(
    @Param(new ZodValidationPipe(userModelSchema))
    params: z.infer<typeof userModelSchema>
  ) {
    return this.usersService.remove(params.id);
  }
}

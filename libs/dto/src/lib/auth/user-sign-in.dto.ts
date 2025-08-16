import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UserSignInDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';


export class UserSigningDto {

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

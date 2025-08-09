import { IsString, IsEmail, IsUUID, IsDateString, IsOptional } from 'class-validator';

export class CreateUsersDto {

  @IsOptional()
  @IsUUID()
  id?: string

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!:string;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}

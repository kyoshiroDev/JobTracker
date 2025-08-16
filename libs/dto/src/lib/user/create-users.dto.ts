import {
  IsString,
  IsOptional,
  IsEmail,
  IsUUID,
  IsDateString,
} from 'class-validator';

export class CreateUsersDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}

import { IsString, IsOptional, IsEmail, IsUrl, IsUUID } from 'class-validator';

export class CreateAnnonceDto {
  @IsString()
  job!: string;

  @IsString()
  contract_type!: string;

  @IsString()
  status!: string;

  @IsOptional()
  @IsString()
  about?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsString()
  benefits?: string;

  @IsOptional()
  @IsString()
  salary?: string;

  @IsOptional()
  @IsUrl()
  annonce_link?: string;

  @IsString()
  work_mode!: string;

  @IsOptional()
  @IsUUID()
  user_id!: string;

  @IsString()
  company_name!: string;

  @IsString()
  company_city!: string;

  @IsOptional()
  @IsString()
  company_phone?: string;

  @IsOptional()
  @IsEmail()
  company_email?: string;

}

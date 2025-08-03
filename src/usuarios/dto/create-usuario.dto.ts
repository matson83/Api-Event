import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'O nome é obrigatório.' })
  nome: string;

  @IsEmail({}, { message: 'O e-mail informado não é válido.' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  senha: string;

  @IsEnum(['admin', 'user'], {
    message: 'O papel deve ser "admin" ou "user".',
  })
  papel: 'admin' | 'user';
}

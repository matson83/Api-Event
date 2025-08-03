import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';
import { CreateUserDto } from './dto/register.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosRepository: UsuariosRepository,
    private readonly jwtService: JwtService, 
) {}

  async register(createUserDto: CreateUserDto) {
  // Verifica se já existe o email
  const userExists = await this.usuariosRepository.findByEmail(createUserDto.email);
  if (userExists) {
    throw new BadRequestException('Email já cadastrado');
  }

  const saltRounds = 10;
  const senhaHash = await bcrypt.hash(createUserDto.senha, saltRounds);

  // Monta o objeto com o tipo correto (incluindo papel)
  const userToCreate: CreateUsuarioDto = {
    ...createUserDto,
    senha: senhaHash,
    papel: 'user', // explicitamente do tipo 'user'
  };

  const createdUser = await this.usuariosRepository.create(userToCreate);
  return createdUser;
}

async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosRepository.findByEmail(email);
    if (usuario && await bcrypt.compare(senha, usuario.senha)) {
      const { senha, ...result } = usuario.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, papel: user.papel };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}

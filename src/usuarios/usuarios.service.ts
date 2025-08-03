import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { IUsuarioEntity } from './interfaces/usuarioEntity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly UsuariosRepository: UsuariosRepository) {}

  async create(CreateUsuarioDto: CreateUsuarioDto): Promise<IUsuarioEntity> {
    const createdUsuario = this.UsuariosRepository.create(CreateUsuarioDto);
    return createdUsuario;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { IUsuarioEntity } from './interfaces/usuarioEntity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private readonly UsuariosService: UsuariosService) {}

  @Post()
  async create(
    @Body() createUsuariosDto: CreateUsuarioDto,
  ): Promise<IUsuarioEntity> {
    return this.UsuariosService.create(createUsuariosDto);
  }
}

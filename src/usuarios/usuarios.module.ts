import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './interfaces/usuarios.schema';
import { UsuariosRepository } from './usuarios.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Usuario.name,schema:UsuarioSchema}])],
  providers: [UsuariosService,
    UsuariosRepository
  ],
  controllers: [UsuariosController],
  exports:[MongooseModule,UsuariosRepository, UsuariosService]
})
export class UsuariosModule {}

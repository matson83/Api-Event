import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Usuario, UsuarioDocument } from "./interfaces/usuarios.schema";
import { IUsuarioEntity } from "./interfaces/usuarioEntity";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";

@Injectable()
export class UsuariosRepository{
    constructor(
        @InjectModel(Usuario.name) private readonly usuarioModel:Model<UsuarioDocument>
    ){}


    async create(CreateUsuarioDto:CreateUsuarioDto):Promise<IUsuarioEntity>{
        const createdUsuario = new this.usuarioModel(CreateUsuarioDto)
        await createdUsuario.save();
        return createdUsuario.toObject();
    }

    async findByEmail(email: string) {
    return this.usuarioModel.findOne({ email }).exec();
  }
}
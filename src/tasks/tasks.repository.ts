import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./interfaces/tasks.schema";
import { Model, Types } from "mongoose";
import { ITaskEntity } from "./interfaces/taskEntity";
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { Usuario , UsuarioDocument } from "src/usuarios/interfaces/usuarios.schema";

@Injectable()
export class TasksRepository{
    constructor(
        @InjectModel(Task.name) private readonly taskModel:Model<Task>,
        @InjectModel(Usuario.name) private readonly usuarioModel:Model<UsuarioDocument>
    ){}

    async createTask(createTaskDto: CreateTaskDto): Promise<ITaskEntity> {

    const taskExistente = await this.taskModel.findOne({titulo:createTaskDto.titulo})

    if(taskExistente){
        throw new BadRequestException('Ja existe uma task com esse titulo')
    }

    if (createTaskDto.usuario) {
    const usuarioId = new Types.ObjectId(createTaskDto.usuario);
    const usuario = await this.usuarioModel.findById(usuarioId).exec();

    if (!usuario) {
      throw new BadRequestException('Usuário não encontrado');
    }

    if (usuario.papel === 'admin') {
      throw new BadRequestException('Usuários com papel admin não podem criar tarefas para o mesmo nível de papel');
    }
  }

    const data = {
        ...createTaskDto,
        usuario: createTaskDto.usuario ? new Types.ObjectId(createTaskDto.usuario) : undefined
    };

    const createdTask = new this.taskModel(data);
    await createdTask.save();
    return createdTask.toObject(); 
}
}
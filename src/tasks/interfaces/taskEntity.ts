import { Types } from 'mongoose';
import { Usuario } from 'src/usuarios/interfaces/usuarios.schema';

export interface ITaskEntity {
  titulo: string;
  descricao?: string;
  status: 'pendente' | 'em andamento' | 'concluída';
  prioridade: 'baixa' | 'média' | 'alta';
  prazo?: Date;
  usuario?: Types.ObjectId | Usuario;
  createdAt?: Date;
  updatedAt?: Date;
}

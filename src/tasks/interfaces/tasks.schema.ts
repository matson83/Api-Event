import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Usuario } from 'src/usuarios/interfaces/usuarios.schema'; // ajuste o path conforme sua estrutura

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  descricao: string;

  @Prop({
    required: true,
    enum: ['pendente', 'em andamento', 'concluída'],
    default: 'pendente',
  })
  status: 'pendente' | 'em andamento' | 'concluída';

  @Prop({
    required: true,
    enum: ['baixa', 'média', 'alta'],
    default: 'média',
  })
  prioridade: 'baixa' | 'média' | 'alta';

  @Prop()
  prazo: Date;

  @Prop({ type: Types.ObjectId, ref: 'Usuario', required: false })
  usuario: Usuario;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

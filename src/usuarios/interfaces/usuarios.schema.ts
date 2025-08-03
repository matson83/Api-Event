import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ timestamps: true })
export class Usuario extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({
    required: true,
    enum: ['admin', 'user'],
    default: 'user',
  })
  papel: 'admin' | 'user';
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

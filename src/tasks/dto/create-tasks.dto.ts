import {
  IsString,
  IsOptional,
  IsEnum,
  IsMongoId,
  IsISO8601,
} from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'O título é obrigatório.' })
  titulo: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  descricao?: string;

  @IsEnum(['pendente', 'em andamento', 'concluída'], {
    message: 'Status inválido. Use: pendente, em andamento ou concluída.',
  })
  status: 'pendente' | 'em andamento' | 'concluída';

  @IsEnum(['baixa', 'média', 'alta'], {
    message: 'Prioridade inválida. Use: baixa, média ou alta.',
  })
  prioridade: 'baixa' | 'média' | 'alta';

  @IsOptional()
  @IsISO8601({}, { message: 'Prazo deve ser uma data válida.' })
  prazo?: string;

  @IsOptional()
  @IsMongoId({ message: 'Usuário deve ser um ObjectId válido.' })
  usuario?: string;
}

export interface IUsuarioEntity {
  nome: string;
  email: string;
  senha: string;
  papel: 'admin' | 'user';
  createdAt?: Date;
  updatedAt?: Date;
}

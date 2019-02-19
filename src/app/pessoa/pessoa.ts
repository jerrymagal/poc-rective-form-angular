import { Endereco } from './endereco';

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  endereco: Endereco;
}

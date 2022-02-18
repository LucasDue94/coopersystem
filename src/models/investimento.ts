import { Acao } from './acao';

export interface Investimento {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: Acao[];
}

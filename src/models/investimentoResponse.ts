import { Investimento } from './investimento';

export interface InvestimentoResponse {
  response: {
    status: string;
    data: {
      listaInvestimentos: Investimento[];
    };
  };
}

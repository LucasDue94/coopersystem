import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from '../../../services/investimentos.service';
import { InvestimentoResponse } from '../../../models/investimentoResponse';
import { Investimento } from '../../../models/investimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investimentos-lista',
  templateUrl: './investimentos-lista.component.html',
  styleUrls: ['./investimentos-lista.component.scss']
})
export class InvestimentosListaComponent implements OnInit {
  listaInvestimentos: Investimento[] = [];

  constructor(private investimentosService: InvestimentosService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.listarInvestimentos();
  }

  listarInvestimentos() {
    this.investimentosService
      .listar()
      .subscribe(
        (investimentoResponse: InvestimentoResponse) => {
          this.listaInvestimentos =
            investimentoResponse?.response?.data?.listaInvestimentos;
        }
      );
  }

  temCarencia(indicadorCarencia: string) {
    return indicadorCarencia === 'S';
  }

  resgate(fundo: string, investimento: Investimento) {
    this.router.navigate(['resgate', fundo], { state: { data: investimento } });
  }
}

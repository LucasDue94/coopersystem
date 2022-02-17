import { Component, OnInit } from '@angular/core';
import {InvestimentosService} from "../../../services/investimentos.service";

@Component({
  selector: 'app-investimentos-lista',
  templateUrl: './investimentos-lista.component.html',
  styleUrls: ['./investimentos-lista.component.scss']
})
export class InvestimentosListaComponent implements OnInit {


  constructor(private investimentosService: InvestimentosService) { }

  ngOnInit(): void {
  }

}

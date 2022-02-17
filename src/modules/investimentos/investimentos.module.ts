import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestimentosListaComponent } from './investimentos-lista/investimentos-lista.component';



@NgModule({
  declarations: [
    InvestimentosListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InvestimentosListaComponent
  ]
})
export class InvestimentosModule { }

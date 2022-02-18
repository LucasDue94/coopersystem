import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestimentosListaComponent } from './investimentos-lista/investimentos-lista.component';
import { ResgateComponent } from './resgate/resgate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InvestimentosListaComponent, ResgateComponent],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [InvestimentosListaComponent, ResgateComponent]
})
export class InvestimentosModule {
}

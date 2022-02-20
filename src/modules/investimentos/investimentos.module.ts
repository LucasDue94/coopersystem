import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestimentosListaComponent } from './investimentos-lista/investimentos-lista.component';
import { ResgateComponent } from './resgate/resgate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalSucessoComponent } from './components/modal-sucesso/modal-sucesso.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErroComponent } from './components/modal-erro/modal-erro.component';
import { FragmentoModalErroComponent } from './components/fragmento-modal-erro/fragmento-modal-erro.component';

@NgModule({
  declarations: [
    InvestimentosListaComponent,
    ResgateComponent,
    ModalSucessoComponent,
    ModalErroComponent,
    FragmentoModalErroComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  providers: [NgbActiveModal],
  exports: [
    InvestimentosListaComponent,
    ResgateComponent
  ]
})
export class InvestimentosModule {
}

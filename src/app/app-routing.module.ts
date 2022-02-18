import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  InvestimentosListaComponent
} from '../modules/investimentos/investimentos-lista/investimentos-lista.component';
import { ResgateComponent } from '../modules/investimentos/resgate/resgate.component';

const routes: Routes = [
  {
    path: 'investimentos',
    component: InvestimentosListaComponent
  },
  { path: 'resgate/:fundo', component: ResgateComponent },
  { path: '**', redirectTo: '/investimentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

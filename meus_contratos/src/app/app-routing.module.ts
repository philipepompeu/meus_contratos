import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';
import { ElaborarContratoComponent } from './elaborar-contrato/elaborar-contrato.component';
import { VisualizaContratoComponent } from './visualiza-contrato/visualiza-contrato.component';

const routes: Routes = [
  {path:'', component: ListaContratosComponent},
  {path:'novo', component: ElaborarContratoComponent},
  {path:'visualizar/:codigo', component: VisualizaContratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';

const routes: Routes = [
  {path:'', component: ListaContratosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

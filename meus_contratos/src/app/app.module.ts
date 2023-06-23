import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ElaborarContratoComponent } from './elaborar-contrato/elaborar-contrato.component';
import { VisualizaContratoComponent } from './visualiza-contrato/visualiza-contrato.component';
import { FormularioContratoComponent } from './formulario-contrato/formulario-contrato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ListaContratosComponent,
    RodapeComponent,
    ElaborarContratoComponent,
    VisualizaContratoComponent,
    FormularioContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

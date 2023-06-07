import { Component } from '@angular/core';


interface Contrato{

  codigo:string;
  dataInicio:string;
  dataFinal:string;
  cliente: string;
  valor: number;
  saldo: number;
}

const CONTRATOS: Contrato[] = [

  {
    codigo: 'XPTO',
    dataInicio:'01/01/2023',
    dataFinal:'31/12/2023',
    cliente: 'Loja de Departamento',
    valor: 1000,
    saldo: 800
  },
  {
    codigo: 'CODIGO0001',
    dataInicio:'01/01/2023',
    dataFinal:'31/12/2023',
    cliente: 'Pequena Transportadora',
    valor: 2000,
    saldo: 1800
  },
  {
    codigo: 'CODIGO0002',
    dataInicio:'01/01/2023',
    dataFinal:'31/12/2023',
    cliente: 'Industria de medio porte',
    valor: 1000,
    saldo: 1000
  },
];

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.css']
})
export class ListaContratosComponent {

  contratos = CONTRATOS; //Futuramente obter de um serviço
}

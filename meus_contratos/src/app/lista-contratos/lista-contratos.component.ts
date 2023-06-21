import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratosService } from '../contratos.service';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.css']
})
export class ListaContratosComponent implements OnInit{

  contratos: Contrato[];
  constructor(private contratosService: ContratosService){

  }

  ngOnInit(): void {
    this.contratos = this.contratosService.getAllContracts();
  }

}

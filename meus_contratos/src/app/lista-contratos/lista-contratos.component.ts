import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratosService } from '../contratos.service';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.css']
})
export class ListaContratosComponent implements OnInit{

  carregandoDados: Promise<boolean>;

  contratos: Contrato[] = [];
  constructor(private contratosService: ContratosService){

  }

  ngOnInit(): void {
    this.contratosService.getAllContracts().subscribe(
      {
        next: (result) => {
          this.contratos = [];
          this.contratos.push(...result);
          this.carregandoDados = Promise.resolve(true)
        },
        //complete:() => this.carregandoDados = Promise.resolve(true)
      }
    );
  }

}
